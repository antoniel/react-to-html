import { flow, identity, pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import * as S from 'fp-ts/lib/string';
import * as R from 'fp-ts/lib/Record';
import * as A from 'fp-ts/lib/Array';
import { convertToPx as convertValuesToPx } from './mapStyleProp';
import { StyleRecord } from '../../types';

export const handleTransformStyle: (
  styles: TransformStyle
) => StyleRecord = flow(
  R.mapWithIndex((key, valuesOfStyles) => {
    return pipe(
      valuesOfStyles,
      E.of,
      E.chain(a => assertIsTransform(key, a)),
      a => a,
      E.fold(
        identity,
        flow(
          A.map(flow(convertValuesToPx, R.toEntries)),
          A.chain(A.map(recordRowToString)),
          A.intercalate(S.Monoid)(' ')
        )
      )
    );
  })
);

const assertIsTransform = (
  key: string,
  value: any
): E.Either<string | number, Array<Record<string, number | string>>> => {
  const isTransform = (key: string) =>
    key === 'transform' && Array.isArray(value);
  return isTransform(key) ? E.right(value) : E.left(value);
};

type TransformStyle = Record<
  string,
  string | number | Array<Record<string, number | string>>
>;
const recordRowToString = ([transformKey, transformValue]: [
  string,
  string | number
]) => `${transformKey}(${transformValue})`;
