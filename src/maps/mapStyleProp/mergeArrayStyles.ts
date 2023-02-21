import { pipe, identity, flow } from 'fp-ts/lib/function';
import * as A from 'fp-ts/lib/Array';
import * as E from 'fp-ts/lib/Either';
import { StyleRecord } from '../../types';

export const mergeArrayStyles = (style: StyleRecordRaw): StyleRecord => {
  return pipe(
    isArrStyleRecord(style),
    E.map(
      flow(
        A.filter((v): v is StyleRecord | Array<StyleRecord> => Boolean(v)),
        E.fromPredicate(A.isNonEmpty, identity),
        E.map(
          A.reduce<ArrStyleRecord | StyleRecord, StyleRecord>(
            {},
            (acc, curr) => {
              return pipe(
                isArrStyleRecord(curr),
                E.fold(
                  a => ({ ...acc, ...a }),
                  b => ({ ...acc, ...mergeArrayStyles(b) })
                )
              );
            }
          )
        ),
        E.getOrElse(() => ({}))
      )
    ),
    E.getOrElse(a => a)
  );
};
type ArrStyleRecord = Array<
  null | undefined | StyleRecord | Array<StyleRecord>
>;
type StyleRecordRaw = ArrStyleRecord | StyleRecord;

export function isArray<A>(u: unknown): u is Array<A> {
  return Array.isArray(u);
}
const isArrStyleRecord = (
  u: StyleRecordRaw
): E.Either<StyleRecord, ArrStyleRecord> => {
  return isArray(u) ? E.right(u) : E.left(u);
};
