import { mergeStyles } from './mapStyleProp';
import { handleTransformStyle } from './handleTransformStyle';

describe('Merge Styles', () => {
  test('Base', () => {
    expect(mergeStyles([])).toEqual({});
  });
  test('Merge styles', () => {
    expect(mergeStyles([{ flex: 1 }, { flex: 2 }])).toEqual({ flex: 2 });
  });
  test('Merge styles with null', () => {
    expect(mergeStyles([{ flex: 1 }, null, { flex: 2 }])).toEqual({
      flex: 2,
    });
  });
  test('Merge nested arrays of styles', () => {
    const some = mergeStyles([
      { flex: 1, overflow: 'hidden' },
      [
        {
          backgroundColor: 'rgb(242, 242, 242)',
        },
        { backgroundColor: 'white' },
      ],
    ]);

    expect(some).toEqual({
      backgroundColor: 'white',
      flex: 1,
      overflow: 'hidden',
    });
  });
});

describe('Transform Style', () => {
  test('Output transform string with units', () => {
    expect(
      handleTransformStyle({
        transform: [{ translateX: 10 }, { translateY: '10%' }],
      })
    ).toEqual({
      transform: 'translateX(10px) translateY(10%)',
    });
  });
  test('Inputs without transform', () => {
    expect(
      handleTransformStyle({
        color: 'red',
        backgroundColor: '#00f',
        fontSize: 32,
      })
    ).toEqual({ color: 'red', backgroundColor: '#00f', fontSize: 32 });
  });
});
