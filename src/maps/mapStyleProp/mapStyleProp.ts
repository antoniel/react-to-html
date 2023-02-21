import { pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import * as A from 'fp-ts/lib/Array';
import * as S from 'fp-ts/lib/string';
import * as R from 'fp-ts/lib/Record';
import { handleTransformStyle } from './handleTransformStyle';
import { MappedNode, StyleRecord } from '../../types';
import { mergeArrayStyles } from './mergeArrayStyles';

export const mapStyleProp = (node: MappedNode) => {
  const mappedStyle = pipe(
    O.fromNullable(node.props.style),
    O.fold(
      () => undefined,
      styleProp =>
        pipe(
          styleProp,
          mergeArrayStyles,
          handleTransformStyle,
          convertToKebabCase,
          convertToPx,
          convertToInlineStyle
        )
    )
  );

  return {
    ...node,
    props: {
      ...node.props,
      style: mappedStyle,
    },
  };
};

const convertToInlineStyle = (style: StyleRecord): string => {
  return pipe(
    Object.entries(style),
    A.map(([key, value]) => `${key}: ${value}`),
    A.intercalate(S.Monoid)('; ')
  );
};

type Entry = [string, string | number];
type Entries = Entry[];
export const convertToPx = (style: StyleRecord): StyleRecord => {
  const isFlex = (key: string) => key === 'flex';
  const shouldSkipConvertToPx = (key: string, value: string | number) => {
    return S.isString(value) || isFlex(key);
  };

  return pipe(
    R.toEntries(style),
    A.reduce(
      [] as Entries,
      (acc, [key, value]): Entries => {
        return shouldSkipConvertToPx(key, value)
          ? [...acc, [key, value]]
          : [...acc, [key, `${value}px`]];
      }
    ),
    R.fromEntries
  );
};

function convertToKebabCase(style: StyleRecord): StyleRecord {
  return pipe(
    R.toEntries(style),
    A.map<Entry, Entry>(([key, value]) => [
      key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`),
      value,
    ]),
    R.fromEntries
  );
}
