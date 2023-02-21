import { pipe, identity, flow } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import * as A from 'fp-ts/lib/Array';
import * as S from 'fp-ts/lib/string';
import * as R from 'fp-ts/lib/Record';
import * as E from 'fp-ts/lib/Either';
import { handleTransformStyle } from './handleTransformStyle';
import { MappedNode, StyleRecord } from '../../types';

export const mapStyleProp = (node: MappedNode) => {
  const mappedStyle = pipe(
    O.fromNullable(node.props.style),
    O.fold(
      () => undefined,
      styleProp =>
        pipe(
          styleProp,
          mergeStyles,
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

type ArrStyleRecord = Array<
  null | undefined | StyleRecord | Array<StyleRecord>
>;
type StyleRecordRaw = ArrStyleRecord | StyleRecord;

export function isArray<A>(u: unknown): u is Array<A> {
  return Array.isArray(u);
}

const isArrStyleRecord = (
  u: StyleRecordRaw
): E.Either<StyleRecord, ArrStyleRecord> => {
  return isArray(u) ? E.right(u) : E.left(u);
};

export const mergeStyles = (style: StyleRecordRaw): StyleRecord => {
  return pipe(
    isArrStyleRecord(style),
    E.map(
      flow(
        A.filter((v): v is StyleRecord | Array<StyleRecord> => Boolean(v)),
        E.fromPredicate(A.isNonEmpty, identity),
        E.map(
          A.reduce<ArrStyleRecord | StyleRecord, StyleRecord>(
            {},
            (acc, curr) => {
              return pipe(
                isArrStyleRecord(curr),
                E.fold(
                  a => ({ ...acc, ...a }),
                  b => ({ ...acc, ...mergeStyles(b) })
                )
              );
            }
          )
        ),
        E.getOrElse(() => ({}))
      )
    ),
    E.getOrElse(a => a)
  );
};
