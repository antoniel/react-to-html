import { InputRNtoHTML, StyleRecord } from "./types";

export function isValidElement(object: InputRNtoHTML) {
  return typeof object === 'object' && object !== null && object.type && object.props;
}

