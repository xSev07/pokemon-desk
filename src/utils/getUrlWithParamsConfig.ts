import config from '../config';

const getUrlWithParamsConfig = (endpointConfig: string, query: object) => {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {
      ...query,
    },
  };
};

export default getUrlWithParamsConfig;
