import { InputRNtoHTML } from "./types";

export function convertToKebabCase(cssObj: { [key: string]: string; }): {
  [key: string]: string;
} {
  const kebabObj: Record<string, string> = {};
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
