import webConfig from './../config/config.json';

class FetchApi {
	constructor() {
		this.url = webConfig.rootApi;
		this.timeout = 10000
	}
	
	
	parseFormDataEncode = (data) => {
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
	};
	
	async beforeFetch(endpoint, config) {
		let fullUrl = endpoint.startsWith('/') ? this.url + endpoint : `${this.url}${endpoint}`;
		config.headers = {};
		if (config.body) {
			config.body = typeof config.body === 'string' ? config.body : JSON.stringify(config.body)
		}
		try {
			const response = await this.fetchWithTimeOut(fullUrl, config, this.timeout);
			if (response) {
				if (response.error && response.error.httpCode === 401 ) {
					localStorage.clear();
					window.onload();
				}
				return response;
			}
		} catch (error) {
			throw Error(error);
		}
	}
	
	fetchWithTimeOut = async (fullUrl, config, timeout) => {
		try {
			const response = await Promise.race([
				fetch(fullUrl, config),
				new Promise((resolve) => {
					setTimeout(() => resolve({name: 'REQUEST_TIME_OUT', message: 'Request time out'}), timeout)
				})
			]);
			if (response.name !== 'REQUEST_TIME_OUT') {
				return response.json();
			}
			return response;
		} catch (error) {
			throw Error(error.message);
		}
	};
	
	
	async get(endpoint, filter) {
		if (filter) {
			let query = this.parseFormDataEncode(filter);
			endpoint = `${endpoint}?${query}`;
		}
		return this.beforeFetch(endpoint, {method: 'GET'})
	}
	
	async post(endpoint, body) {
		return this.beforeFetch(endpoint, {method: 'POST', body});
	}
	
	async put(endpoint, body) {
		return this.beforeFetch(endpoint, {method: 'PUT', body});
	}
	
	async patch(endpoint, body) {
		return this.beforeFetch(endpoint, {method: 'PATCH', body});
	}
	
	async delete(endpoint, body) {
		return this.beforeFetch(endpoint, {method: 'DELETE', body});
	}
	
	
}
export default new FetchApi();