import { format as prettyFormat, plugins } from "pretty-format";

export const fromRNtoHTML = (input: Record<string, any>) =>
  prettyFormat(input, {
    plugins: [ReactTestNativeJestPreview],
    highlight: false,
    printBasicPrototype: false,
  });

function convertToKebabCase(cssObj: { [key: string]: string }): {
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
function isValidElement(object: any) {
  return typeof object === 'object' && object !== null && object.$$typeof === Symbol.for('react.element');
}

const ReactTestNativeJestPreview = {
  test: isValidElement,
  serialize: (val: any, config: any, indentation: any, depth: any, refs: any, printer: any) => {
    let newVal = val;
    if (val?.type === "Text") {
      newVal = { ...val, type: "p" };
    }
    if (val?.type === "View") {
      newVal = { ...val, type: "div" };
    }
    if (val?.props?.style) {
      newVal = {
        ...newVal,
        props: { ...val.props, style: convertToKebabCase(val.props.style) },
      };
    }
    return plugins.ReactElement.serialize(
      newVal,
      config,
      indentation,
      depth,
      refs,
      printer
    );
  },
}