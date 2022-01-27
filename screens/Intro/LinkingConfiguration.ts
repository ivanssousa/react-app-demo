export default {
  prefixes: ['/'],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          TabThree: {
            screens: {
              TabTwoScreen: 'three',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
