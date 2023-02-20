import React from 'react';
import { fromRNtoHTML } from '.';
import { Text, View } from './fixtures/react-native';

it('fromRNtoHTML', () => {
  const some = fromRNtoHTML(
    <View>
      <Text>oi</Text>
    </View>
  );

  expect(some).toMatchInlineSnapshot(`
    "<View>
      <Text>
        oi
      </Text>
    </View>"
  `);
});
