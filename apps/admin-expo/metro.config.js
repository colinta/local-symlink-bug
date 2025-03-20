// Learn more https://docs.expo.io/guides/customizing-metro
const {getDefaultConfig} = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = {
  ...config,
  // resolver: {  // I tried with and without these settings - they weren't necessary in the vanilla react-native app
  //   ...config.resolver,
  //   unstable_enableSymlinks: true,
  //   unstable_enablePackageExports: true,
  // },
};
