import { format as prettyFormat, plugins } from "pretty-format";
import { match } from 'ts-pattern'
import { InputRNtoHTML, MappedNode, RnComponentsUnion } from "./types";
import { isValidElement, convertToKebabCase, convertToInlineStyle, convertToPx } from "./utils";


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
  const kebabStyleWithPx = convertToPx(kebabStyle)
  const inlineStyle = convertToInlineStyle(kebabStyleWithPx)
  return {
    ...node,
    props: {
      ...node.props,
      style: inlineStyle
    }
  }
}


export const fromRNtoHTML = (input: InputRNtoHTML) =>
  prettyFormat(input, {
    plugins: [ReactTestNativeJestPreview],
    highlight: false,
    printBasicPrototype: false,
  });

const ReactTestNativeJestPreview = {
  test: (v: InputRNtoHTML) => !!isValidElement(v) || plugins.ReactTestComponent.test(v),
  serialize: (node: InputRNtoHTML, config: any, indentation: any, depth: any, refs: any, printer: any) => {
    const mappedNode = mapNodeType(node)
    const mappedStyle = mapStyleProp(mappedNode)

    return plugins.ReactElement.serialize(
      mappedStyle,
      config,
      indentation,
      depth,
      refs,
      printer
    );
  },
}