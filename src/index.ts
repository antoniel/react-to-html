import { format as prettyFormat, plugins } from "pretty-format";
import { match } from 'ts-pattern'
import { InputRNtoHTML, MappedNode, RnComponentsUnion } from "./types";
import { isValidElement, convertToKebabCase } from "./utils";


const mapNodeType = (node: InputRNtoHTML): MappedNode => {
  const actualType = (typeof node.type === "function" ? node.type.name : node.type) as RnComponentsUnion
  return match<RnComponentsUnion, MappedNode>(actualType)
    .with('Text', () => ({ ...node, type: "p" }))
    .with('View', () => ({ ...node, type: "div" }))
    .otherwise(() => ({ ...node, type: actualType }))
}

const mapStyleProp = (node: MappedNode) => {
  if (!node?.props?.style) {
    return node
  }
  const kebabStyle = convertToKebabCase(node.props.style)
}


export const fromRNtoHTML = (input: InputRNtoHTML) =>
  prettyFormat(input, {
    plugins: [ReactTestNativeJestPreview],
    highlight: false,
    printBasicPrototype: false,
  });

const ReactTestNativeJestPreview = {
  test: (v: InputRNtoHTML) => isValidElement(v) || plugins.ReactTestComponent.test(v),
  serialize: (node: InputRNtoHTML, config: any, indentation: any, depth: any, refs: any, printer: any) => {
    let newVal = node;
    const mappedNode = mapNodeType(node)

    if (node?.props?.style) {
      newVal = {
        ...newVal,
        props: { ...node.props, style: convertToKebabCase(node.props.style) },
      };
    }
    return plugins.ReactElement.serialize(
      mappedNode,
      config,
      indentation,
      depth,
      refs,
      printer
    );
  },
}