import { InputRNtoHTML, StyleRecord } from "./types";


export function convertToKebabCase(cssObj: StyleRecord): StyleRecord {
  const kebabObj: StyleRecord = {};
  for (const key in cssObj) {
    if (cssObj.hasOwnProperty(key)) {
      const kebabKey = key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
      kebabObj[kebabKey] = cssObj[key];
    }
  }
  return kebabObj;

}
export function isValidElement(object: InputRNtoHTML) {
  return typeof object === 'object' && object !== null && object.type && object.props;
}

export const convertToInlineStyle = (style: Record<string, string>): string => {
  return Object.entries(style)
    .map(([key, value]) => `${key}: ${value}`)
    .join('; ');
}

export const convertToPx = (obj: StyleRecord): StyleRecord => {
  return Object.entries(obj)
    .reduce((acc, [key, value]) => {
      const isString = typeof value === 'string';
      const isFlex = key === 'flex';
      if (isString || isFlex) {
        acc[key] = value;
        return acc;
      }

      acc[key] = `${value}px`;
      return acc;
    }, {} as StyleRecord);
}