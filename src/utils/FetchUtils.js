import config from './../config';

class FetchAPI {
  constructor() {
    this.timeout = config.timeout;
    this.uri = config.rootapi;
  }

  getHeader() {
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      'Content-Type': 'application/json'
    }
    if (accessToken) headers.Authorization = "Bearer " + accessToken;
    return headers;
  }

  getFetchParams(path, method, query, body) {
    let fullPath = path[0] === '/' ? `${this.uri}${path}` : `${this.uri}/${path}`
    if (query) {
      fullPath = fullPath + query;
    }
    let config = {
      method: method,
      headers: this.getHeader(),
      body: JSON.stringify(body),
    }
    return {
      endpoint: fullPath,
      config: config
    }
  }

  async fetchApiWithTimeout(path, method, query, body) {
    let fetchParams = this.getFetchParams(path, method, query, body);
    try {
      let response = await Promise.race([
        fetch(fetchParams.endpoint, fetchParams.config),
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ name: "timeout" })
          }, this.timeout);
        })
      ])
      if (response.name === "timeout") {
        return response;
      }
      if (response.status === 401) {
        localStorage.clear();
      }
      let result = await response.json();
      result.status = response.status;
      return result;
    } catch (error) {
      return { error }
    }
  }
}

class FetchUtils {
  constructor() {
    this.fetchAPI = new FetchAPI();
  }
  async get(path, query) {
    return await this.fetchAPI.fetchApiWithTimeout(path, 'GET', query);
  }
  async post(path, body) {
    return await this.fetchAPI.fetchApiWithTimeout(path, 'POST', null, body);
  }
  async patch(path, body) {
    return await this.fetchAPI.fetchApiWithTimeout(path, 'PATCH', null, body);
  }
  async delete(path, body) {
    return await this.fetchAPI.fetchApiWithTimeout(path, 'DELETE', null, body);
  }
}

let instance = new FetchUtils();
Object.freeze(instance);

export default instance;