import * as api from '../../../utils/callApi';

export const getListHubs = async (page) => {
  let accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    try {
      let response = await api.get(`/hubs`, '', '', accessToken);
      return response;
    } catch (error) {
      throw Error(error);
    }
  }
}