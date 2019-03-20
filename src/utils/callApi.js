import { parseFormDataEncode } from './encodeFormData';
const appConfig = require('../config/config.json');


async function callApi(endpoint, config, schema, host = '') {
    endpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

    let fullUrl;
    if (host !== '') {
        fullUrl = (endpoint.indexOf(appConfig[host]) === -1) ? appConfig[host] + endpoint : endpoint;
    } else {
        fullUrl = (endpoint.indexOf(appConfig.rootApi) === -1) ? appConfig.rootApi + endpoint : endpoint;
    }

    let response;
    try {
        response = await fetch(fullUrl, config);
    } catch (e) {
        throw new Error("An error occurred,please check your network connection and try again!");
    }

    return await response.json();
};

function fetcher(endpoint, config, schema, authenticate, host) {

    const getToken = localStorage.getItem("accessToken");
    const getClientKey = localStorage.getItem("clientKey");
    let token = typeof authenticate === 'string' ? authenticate : getToken;
    let authorization;
    let contentType;

    if (!token) {
        contentType = 'application/x-www-form-urlencoded';
        authorization = `Basic ${getClientKey}`;
    } else {
        contentType = 'application/json';
        authorization = `Bearer ${token}`;
    }

    config.headers = Object.assign({}, {
        // 'Accept': 'application/json',
        'Content-Type': contentType,
        'Authorization': authorization,
        'xxx-app-name': 'SHIPPO_WEB',
        'xxx-app-key': '123'
    }, config.headers);

    if ((config.method === 'GET' && config.body) || !token) {
        config.body = parseFormDataEncode(config.body);
    }

    config.body = typeof config.body === 'object' ? JSON.stringify(config.body) : config.body;
    const { method = 'GET', headers, body } = config;
    let response;

    try {
        response = callApi(endpoint, { method, headers, body }, schema, host);
        return response;
    } catch (error) {
        throw Error(error);
    }

}

export function get(endpoint, query, schema, authenticate, host) {
    if (query) {
        // let parts = url.parse(endpoint, true);
        // parts.query = { ...parts.query, ...query };
        // parts.search = qs.stringify(parts.query);
        // endpoint = qs.formats(parts);
        query = parseFormDataEncode(query)
        endpoint = `${endpoint}?${query}`;
    }
    return fetcher(endpoint, { method: 'GET' }, schema, authenticate, host);
}

export function post(endpoint, body, schema, authenticate, host) {
    return fetcher(endpoint, { method: 'POST', body }, schema, authenticate, host);
}

export function put(endpoint, body, schema, authenticate, host) {
    return fetcher(endpoint, { method: 'PUT', body }, schema, authenticate, host);
}

export function patch(endpoint, body, schema, authenticate, host) {
    return fetcher(endpoint, { method: 'PATCH', body }, schema, authenticate, host);
}

export function dele(endpoint, body, schema, authenticate, host) {
    return fetcher(endpoint, { method: 'DELETE', body }, schema, authenticate, host);
}
