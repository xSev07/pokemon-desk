import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

const req = async (endpoint: string) => {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));
  const result = await fetch(uri).then((res) => res.json());
  return result;
};

export default req;
