import * as RnImports from './fixtures/react-native';

export type RnComponentsUnion = keyof typeof RnImports;
export type InputRNtoHTML = {
  '$$typeof'?: unknown;
  type: RnComponentsUnion | (() => any);
  props: Partial<{
    style: Record<string, string>;
    children: InputRNtoHTML[] | string | null | undefined;
  }>;
};
export type MappedNode = {
  type: string;
} & Omit<InputRNtoHTML, 'type'>;
