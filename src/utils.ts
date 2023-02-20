import { InputRNtoHTML } from "./types";

type StyleRecord = Record<string, string | number>;
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
  return typeof object === 'object' && object !== null && object.$$typeof === Symbol.for('react.element');
}

export const convertToInlineStyle = (style: Record<string, string>): string => {
  return Object.entries(style)
    .map(([key, value]) => `${key}: ${value}`)
    .join('; ');
}

export const convertToPx = (obj: Record<string, string | number>): Record<string, string> => {
  return Object.entries(obj)
    .reduce((acc, [key, value]) => {
      if (typeof value === 'number') {
        acc[key] = `${value}px`;
        return acc;
      }
      acc[key] = value as string;
      return acc;
    }, {} as Record<string, string>);
}