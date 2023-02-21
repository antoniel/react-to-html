import React from 'react';
import App from './App';
import { render } from '@testing-library/react-native';
import { fromRNtoHTML } from '@antoniel/react-native-to-jest-preview';

// :🚨 to toggle between react-native-web and react-native see babel.config.js
it.skip('Render with react-native-web', () => {
  const { toJSON } = render(<App />);
  expect(toJSON()).toMatchInlineSnapshot(`
    <div
      className="css-view-175oi2r r-alignItems-1awozwy r-backgroundColor-14lw9ot r-flex-13awgt0 r-justifyContent-1777fci"
      dir={null}
    >
      <div
        className="css-text-1rynq56"
        dir="auto"
      >
        Open up App.js to start working on your app!
      </div>
    </div>
  `);
});
it('Render with react-native', () => {
  const { toJSON } = render(<App />);
  expect(toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "alignItems": "center",
          "backgroundColor": "#fff",
          "flex": 1,
          "justifyContent": "center",
        }
      }
    >
      <Text>
        Open up App.js to start working on your app!
      </Text>
    </View>
  `);
});

it('render with react-native using "react-native-to-jest-preview" transform', () => {
  const { toJSON } = render(<App />);
  expect(fromRNtoHTML(toJSON())).toMatchInlineSnapshot(`
    "<div
      style=\\"flex: 1; background-color: #fff; align-items: center; justify-content: center\\"
    >
      <p>
        Open up App.js to start working on your app!
      </p>
    </div>"
  `);
});
