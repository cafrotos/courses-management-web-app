
import appConfig from '../config/config.json';
import { SHIPPO_APP, TIMEOUT } from '../constants';
// import history from '../history';

class FetchUtils {
  constructor() {
    this.url = appConfig.rootApi;
    this.timeout = TIMEOUT;
  }
  /**
   * Request with data json
   */
  getHeaderConfigJson() {
    const token = localStorage.getItem('accessToken')
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'xxx-app-name': SHIPPO_APP.name,
    }
    return headers;
  }

  /**
   * Request with data encoded only login password get token
   */

  getHeaderConfigEncoded() {
    const clientKey = localStorage.getItem('clientKey')
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${clientKey}`,
      'xxx-app-name': SHIPPO_APP.name,
    }

    return headers;
  }
  /**
   * endpoint: Full path URL
   * config: set method, headers, body
   * timeout: max time request
   */

  async fetchWithTimeout(endpoint, config, timeout, callback) {

    try {
      const response = await Promise.race([
        fetch(endpoint, config),
        new Promise((resolve, reject) => {
          setTimeout(() => resolve({ name: 'REQUEST_TIME_OUT', message: 'Request time out' }), timeout)
        })
      ])
      return response;
    } catch (error) {
      throw Error(error.message);
    }
  }


  /**
   * endpoint: sort path request
   * config: set method, headers, body
   */


  async beforeFetch(endpoint, config) {
    let fullPath = endpoint.startsWith('/') ? this.url + endpoint : `${this.url}${endpoint}`;
    config.headers = this.getHeaderConfigJson();
    if (config.body) {
      config.body = typeof config.body === 'string' ? config.body : JSON.stringify(config.body)
    }
    try {


      const response = await this.fetchWithTimeout(fullPath, config, this.timeout);
      if (response) {
        if (response.error && response.error.httpCode === 401 ) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('expriseAt');
          window.onload();
          // history.push('/login/password');
        }
        return response;
      }
    } catch (error) {
      throw Error(error);
    }
  }

  async allowKeepLogin() {
    let expiresAt = localStorage.getItem('expiresAt');
    let expriseTime = new Date(expiresAt).getTime();
    if (expriseTime > Date.now() && expriseTime < new Date().setHours(new Date().getHours() + 2)) {
      await this.refreshToken();
    }
  }


  async refreshToken() {
    let refreshToken = localStorage.getItem('refreshToken');
    const response = await this.getAccessToken(`/oauth/oauth/token`, { grant_type: 'refresh_token', refresh_token: refreshToken })
    if (response.httpCode === 200) {
      await localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      localStorage.setItem('expiresAt', response.accessTokenExpiresAt);
    }
  }

  parseFormDataEncode(data) {
    const formData = [];
    if (data) {
      for (const key in data) {
        if (typeof data[key] === 'object') {
          formData.push(encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(data[key])));
        } else {
          formData.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
      }
    }
    return formData.join("&");
  }

  async getAccessToken(endpoint, body) {
    const config = {};
    let fullPath = endpoint.startsWith('/') ? this.url + endpoint : `${this.url}${endpoint}`;
    config.method = "POST";
    config.headers = this.getHeaderConfigEncoded();
    config.body = this.parseFormDataEncode(body)
    try {
      const response = await this.fetchWithTimeout(fullPath, config, this.timeout);
      if (response) {
        return response;
      }
    } catch (error) {
      throw Error(error);
    }
  }


  async get(endpoint, body) {
    if (body) {
      let query = this.parseFormDataEncode(body);
      endpoint = `${endpoint}?${query}`;
    }
    await this.allowKeepLogin();
    return this.beforeFetch(endpoint, { method: 'GET' })
  }

  async post(endpoint, body) {
    await this.allowKeepLogin();
    return this.beforeFetch(endpoint, { method: 'POST', body });
  }

  async put(endpoint, body) {
    await this.allowKeepLogin();
    return this.beforeFetch(endpoint, { method: 'PUT', body });
  }

  async patch(endpoint, body) {
    await this.allowKeepLogin();
    return this.beforeFetch(endpoint, { method: 'PATCH', body });
  }

  async delete(endpoint, body) {
    await this.allowKeepLogin();
    return this.beforeFetch(endpoint, { method: 'DELETE', body });
  }
}

export default new FetchUtils();