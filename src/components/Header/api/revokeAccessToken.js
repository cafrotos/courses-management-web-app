import FetchUtils from '../../../utils/fetchUtils';


export const revokeAccessToken = async (userId) => {
    try {
        let response = await FetchUtils.post('/oauth/logout', { userId });
        return response;
    } catch (error) {
        throw Error(error);
    }
};