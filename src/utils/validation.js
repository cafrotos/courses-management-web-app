/*
*
* @rule validate password
*
* */
import FetchUtils from './fetchUtils';
export const regextUsername = /^[a-zA-Z0-9]+([_]?[a-zA-Z0-9]+)*$/; // eslint-disable-next-line
export const regexName = /^\S+$/; // eslint-disable-next-line
export const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // eslint-disable-next-line
export const regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; // eslint-disable-next-line
export const regexMobile = /([0-9]{10,11})\b/;  // eslint-disable-next-line
export const regexCurrency =  /^[0-9\b\.\,]+$/; // eslint-disable-next-line

export const ValidationFormField = async (field, value) => {
	let isValidate = false;
	switch (field) {
		case 'username': {
			try {
				const response = await FetchUtils.post('/oauth/validation/username', { username: value })
				if (response && response.isValid) {
					return regextUsername.test(value)

				}
				return false
			} catch (error) {
				throw Error(error.message);
			}
		}
		case 'fullName': {
			if (typeof value === 'string' && value.trim().length > 0) {
				return isValidate = true;
			}
			break;
		}
		case 'firstName': {
			if (typeof value === 'string' && value.trim().length > 0) {
				return isValidate = true;
			}
			break;
		}
		case 'lastName': {
			if (typeof value === 'string' && value.trim().length > 0) {
				return isValidate = true;
			}
			break;
		}
		case 'email': {
			try {
				const response = await FetchUtils.post('/oauth/validation/email', { email: value })
				if (response && response.isValid) {
					return regexEmail.test(value);
				}
				return false
			} catch (error) {
				throw Error(error.message);
			}
		}
		case 'tagLine':
			return true;
		case 'password':
			return regexPassword.test(value);
		case 'passwordNew':
			return regexPassword.test(value);
		case 'mobile':
			if (/[a-zA-Z]/g.test(value)) return false;
			value = value.replace(/\D/g, '');
			if (/^(012[0-9]|016[2-9]|03[2-9]|07[0|6-9]|08[1-5]|08[6|8|9]|09[0-4]|05[6-8]|09[6-9]|018[6|8])+[0-9]{7}$/.test(value)) return true;
			return false;
		default:
			isValidate = false;
			break;
	}

	return isValidate;
}

export const isEmptyObject = (obj) => {
	if (obj instanceof Array) return true;
	return Object.keys(obj).length === 0;
}
