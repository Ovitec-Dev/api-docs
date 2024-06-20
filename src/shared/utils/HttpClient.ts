import { ErrorHTTP, IHttpClient } from '../interface/httpClient.interface';
import logger from './logger';

/**
 * HttpClient is the responsable to make HTTP request to servers
 */
export class HttpClient implements IHttpClient {
  async get<T extends object, K extends object>(urlBase: string, params?: T | undefined): Promise<K> {
    try {
      const options = {
        method: 'GET',
        headers: { Accept: '*/*', 'User-Agent': 'Thunder Client (https://www.thunderclient.com)' },
      };
      let url = urlBase;
      if (params && Object.keys(params).length !== 0)
        url = `${url}?${new URLSearchParams(params as Record<string, string>)}`;
      const response = await fetch(url, options);
      // console.log(response);
      if (!response.ok) {
        throw new ErrorHTTP(response.status, 'http_client.get_error');
      }
      return (await response.json()) as K;
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async post<T extends object, K extends object>(urlBase: string, params?: T): Promise<K> {
    try {
      const body = new URLSearchParams(params as Record<string, string>).toString();
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        },
        body,
      };
      const response = await fetch(urlBase, options);
      if (!response.ok) {
        throw new ErrorHTTP(response.status, 'http_client.post_error');
      }
      return (await response.json()) as K;
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
}
