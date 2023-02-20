import React from 'react';
import { fromRNtoHTML } from '.';
import { Text, View } from './fixtures/react-native';

describe('fromRNtoHTML', () => {
  it('mapNodeType', () => {
    const some = fromRNtoHTML(
      <View>
        <Text>oi</Text>
      </View>
    );

    expect(some).toMatchInlineSnapshot(`
      "<div>
        <p>
          oi
        </p>
      </div>"
    `);
  });
  it('mapStyleProp', () => {
    const some = fromRNtoHTML(
      <View>
        <Text style={{ color: 'red', backgroundColor: '#00f', fontSize: 32 }}>
          oi
        </Text>
      </View>
    );
    expect(some).toMatchInlineSnapshot(`
      "<div>
        <p
          style=\\"color: red; background-color: #00f; font-size: 32px\\"
        >
          oi
        </p>
      </div>"
    `);
  });
});
