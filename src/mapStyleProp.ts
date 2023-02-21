import { MappedNode, StyleRecord } from './types';
import { pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import * as A from 'fp-ts/lib/Array';
import * as S from 'fp-ts/lib/string';
import * as R from 'fp-ts/lib/Record';

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

const convertToPx = (style: StyleRecord): StyleRecord => {
  type Entries = Array<[string, string | number]>;
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
  const kebabObj: StyleRecord = {};
  for (const key in style) {
    if (style.hasOwnProperty(key)) {
      const kebabKey = key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);
      kebabObj[kebabKey] = style[key];
    }
  }
  return kebabObj;
}

type StyleRecordRaw =
  | Array<null | undefined | StyleRecord | Array<StyleRecord>>
  | StyleRecord;

export const mergeStyles = (style: StyleRecordRaw): StyleRecord => {
  if (Array.isArray(style)) {
    if (style.length === 0) {
      return {};
    }

    const styles = style.filter((v): v is StyleRecord | Array<StyleRecord> =>
      Boolean(v)
    );

    return styles.reduce((acc: StyleRecord, curr) => {
      if (Array.isArray(curr)) {
        const merged = mergeStyles(curr);
        return { ...acc, ...merged };
      }

      return { ...acc, ...curr };
    }, {});
  }

  return style;
};

type TransformStyle = Record<
  string,
  string | number | Array<Record<string, number | string>>
>;
export const handleTransformStyle = (style: TransformStyle) => {
  const assertIsTransform = (
    key: string,
    value: any
  ): value is Array<Record<string, any>> => {
    return key === 'transform' && Array.isArray(value);
  };

  return Object.entries(style).reduce((acc, [key, objectTransformValues]) => {
    if (assertIsTransform(key, objectTransformValues)) {
      const transformValue = objectTransformValues.map(convertToPx);
      const transformString = transformValue
        .map((transform: StyleRecord) =>
          Object.entries(transform)
            .map(
              ([transformKey, transformValue]) =>
                `${transformKey}(${transformValue})`
            )
            .join(' ')
        )
        .join(' ');
      return {
        ...acc,
        transform: transformString,
      };
    }
    return { ...acc, [key]: objectTransformValues };
  }, {} as StyleRecord);
};
