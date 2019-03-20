import FilterUtils from '../../../utils/fetchUtils';

export const getListHubs = async () => {
  try {
    let response = await FilterUtils.get(`/operation/hubs`);
    return response;
  } catch (error) {
    throw Error(error);
  }
}
