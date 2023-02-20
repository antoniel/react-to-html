import { MappedNode } from "./types";
import { convertToKebabCase, convertToInlineStyle, convertToPx } from "./utils";

export const mapStyleProp = (node: MappedNode) => {
  if (!node?.props?.style) {
    return node;
  }
  const kebabStyle = convertToKebabCase(node.props.style);
  const kebabStyleWithPx = convertToPx(kebabStyle);
  const inlineStyle = convertToInlineStyle(kebabStyleWithPx);
  return {
    ...node,
    props: {
      ...node.props,
      style: inlineStyle
    }
  };
};

