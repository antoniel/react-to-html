import { format as prettyFormat, plugins } from 'pretty-format';
import { match } from 'ts-pattern';
import { mapStyleProp } from './maps/mapStyleProp/mapStyleProp';
import { InputRNtoHTML, MappedNode, RnComponentsUnion } from './types';
import { isValidElement } from './utils';

const mapNodeType = (node: InputRNtoHTML): MappedNode => {
  const actualType = (typeof node.type === 'function'
    ? node.type.name
    : node.type) as RnComponentsUnion;
  return match<RnComponentsUnion, MappedNode>(actualType)
    .with('Text', () => ({ ...node, type: 'p' }))
    .with('View', () => ({ ...node, type: 'div' }))
    .otherwise(() => ({ ...node, type: 'div' }));
};

export const fromRNtoHTML = (input: InputRNtoHTML) =>
  prettyFormat(input, {
    plugins: [ReactTestNativeJestPreview],
    highlight: false,
    printBasicPrototype: false,
  });

const ReactTestNativeJestPreview = {
  test: (v: InputRNtoHTML) =>
    !!isValidElement(v) || plugins.ReactTestComponent.test(v),
  serialize: (
    node: InputRNtoHTML,
    config: any,
    indentation: any,
    depth: any,
    refs: any,
    printer: any
  ) => {
    // The react-test-components have a different structure than the react-elements
    // they get children out of the props object
    const serializeByCheckRectElementOrRectTestComponent = node?.children
      ? plugins.ReactTestComponent.serialize
      : plugins.ReactElement.serialize;
    const mappedNode = mapNodeType(node);
    const mappedStyle = mapStyleProp(mappedNode);

    return serializeByCheckRectElementOrRectTestComponent(
      mappedStyle,
      config,
      indentation,
      depth,
      refs,
      printer
    );
  },
};
