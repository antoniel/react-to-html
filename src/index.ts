import { format as prettyFormat, plugins } from "pretty-format";

export const fromRNtoHTML = (input: Record<string, any>) =>
  prettyFormat(input, {
    plugins: [ReactTestNativeJestPreview, plugins.ReactElement],
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

const ReactTestNativeJestPreview = {
  test: plugins.ReactTestComponent.test,
  serialize: (val: any, config: any, indentation: any, depth: any, refs: any, printer: any) => {
    let newVal = val;
    if (val.type === "Text") {
      newVal = { ...val, type: "p" };
    }
    if (val.type === "View") {
      newVal = { ...val, type: "div" };
    }
    if (val.props.style) {
      newVal = {
        ...newVal,
        props: { ...val.props, style: convertToKebabCase(val.props.style) },
      };
    }
    return plugins.ReactTestComponent.serialize(
      newVal,
      config,
      indentation,
      depth,
      refs,
      printer
    );
  },
};