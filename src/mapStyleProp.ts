import { MappedNode, StyleRecord } from './types';

export const mapStyleProp = (node: MappedNode) => {
  if (!node?.props?.style) {
    return node;
  }
  const mergedStyles = mergeStyles(node.props.style);
  const kebabStyle = convertToKebabCase(mergedStyles);
  const kebabStyleWithPx = convertToPx(kebabStyle);
  const inlineStyle = convertToInlineStyle(kebabStyleWithPx);
  return {
    ...node,
    props: {
      ...node.props,
      style: inlineStyle,
    },
  };
};
export const convertToInlineStyle = (style: StyleRecord): string => {
  return Object.entries(style)
    .map(([key, value]) => `${key}: ${value}`)
    .join('; ');
};

export const convertToPx = (style: StyleRecord): StyleRecord => {
  return Object.entries(style).reduce((acc, [key, value]) => {
    const isString = typeof value === 'string';
    const isFlex = key === 'flex';
    if (isString || isFlex) {
      acc[key] = value;
      return acc;
    }

    acc[key] = `${value}px`;
    return acc;
  }, {} as StyleRecord);
};
export function convertToKebabCase(style: StyleRecord): StyleRecord {
  const kebabObj: StyleRecord = {};
  for (const key in style) {
    if (style.hasOwnProperty(key)) {
      const kebabKey = key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);
      kebabObj[kebabKey] = style[key];
    }
  }
  return kebabObj;
}

// onStyleValues we may have  style: [{ flex: 1 }, null], we should filter and merge all the styles
type StyleRecordRaw = Array<null | undefined | StyleRecord> | StyleRecord;

const mergeStyles = (style: StyleRecordRaw): StyleRecord => {
  if (Array.isArray(style)) {
    if (style.length === 0) {
      return {};
    }
    return style
      .filter((v): v is StyleRecord => Boolean(v))
      .reduce((acc, curr) => {
        if (curr === null) return acc;
        return { ...acc, ...curr };
      }, {} as StyleRecord);
  }
  return style;
};

if (import.meta.vitest) {
  describe('Merge Styles', () => {
    test('Base', () => {
      expect(mergeStyles([])).toEqual({});
    });
    test('Merge styles', () => {
      expect(mergeStyles([{ flex: 1 }, { flex: 2 }])).toEqual({ flex: 2 });
    });
    test('Merge styles with null', () => {
      expect(mergeStyles([{ flex: 1 }, null, { flex: 2 }])).toEqual({
        flex: 2,
      });
    });
  });
}
