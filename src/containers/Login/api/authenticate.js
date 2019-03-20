import FetchUtils from '../../../utils/fetchUtils';

export const getAccessToken = async (body) => {
	try {
		let response = await FetchUtils.getAccessToken('/oauth/oauth/token', body);
		return response;
	} catch (error) {
		throw Error(error);
	}
};

export const verifyUsername = async (username) => {
	try {
		let response = await FetchUtils.post('/oauth/login', { username })
		return response;
	} catch (error) {
		throw Error(error);
	}
};

export const getAppConfig = async () => {
	try {
		let response = await FetchUtils.get('/config/app_state');
		return response;
	} catch (error) {
		throw Error(error);
	}
}
