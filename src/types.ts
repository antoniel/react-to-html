import * as RnImports from './fixtures/react-native';

export type StyleRecord = Record<string, string | number>;
export type RnComponentsUnion = keyof typeof RnImports;
export type InputRNtoHTML = {
  $$typeof?: unknown;
  type: RnComponentsUnion | (() => any);
  props: Partial<{
    style: StyleRecord;
  }>;
  children?: InputRNtoHTML[] | string | null | undefined | any[];
};
export type MappedNode = {
  type: string;
} & Omit<InputRNtoHTML, 'type'>;
