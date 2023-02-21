const esModules = [
  '@react-native',
  'react-native',
  'styled-components',
  'expo-status-bar',
].join('|');

module.exports = {
  automock: false,
  resetMocks: false,
  /**
   * timers: 'fake' previne o seguinte erro que a gente estava tendo com o Animated do Drawer
   *  que executava mesmo depois de terminar o teste:
   * > ReferenceError: You are trying to 'import' a file after the Jest environment has been torn down.
   */
  preset: 'react-native',
  timers: 'fake',
  testEnvironment: 'node',
  transformIgnorePatterns: [`node_modules/(?!${esModules})`],
  transform: {
    '"\\.[jt]sx?$"': '@swc/jest',
  },
};
