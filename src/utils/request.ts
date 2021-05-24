import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

const req = async <T>(endpoint: string, query: object): Promise<T> => {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  const result = await fetch(uri).then((res) => res.json());
  return result;
};

export default req;
