export default {
  prefixes: ['/Cadastro'],
  config: {
    screens: {
      Root: {
        screens: {
          Registro: {
            screens: {
              Registro: 'Registro',
            },
          },
          Verificacao: {
            screens: {
              Verificacao: 'Verificacao',
            },
          },
          Identidade: {
            screens: {
              Identidade: 'Identidade',
            },
          },
          BiLoad: {
            screens: {
              BiLoad: 'BiLoad',
            },
          },
          RegistroUser: {
            screens: {
              RegistroUser: 'RegistroUser',
            },
          },
          FingerPrinter: {
            screens: {
              FingerPrinter: 'FingerPrinter',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
