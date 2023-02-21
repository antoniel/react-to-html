module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      // To enable react-native-web just uncomment the following line
      // [
      //   '@antoniel/module-resolver',
      //   {
      //     alias: {
      //       '^react-native$': 'react-native-web',
      //     },
      //   },
      // ],
    ],
  };
};
