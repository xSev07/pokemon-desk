interface IServer {
  protocol: string;
  host: string;
}

interface IEndpoint {
  [index: string]: {
    method: string;
    uri: {
      pathname: string;
    };
  };
}

interface IConfig {
  client: {
    server: IServer;
    endpoint: IEndpoint;
  };
}

export const config: IConfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
    },
  },
};

export default config;
