import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';

const API_URL = 'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking';
const API_ID = 'dj00aiZpPVIybkxSOE5uaU56ZiZzPWNvbnN1bWVyc2VjcmV0Jng9YjE-';

const startRequest = (categoryId: any) =>({
  type: 'START_REQUEST',
  payload: {categoryId}
});

const receiveData = (categoryId: any, error: any, response?: any) => ({
  type: 'RECEIVE_DATA',
  payload: {categoryId, error, response}
});

const finishRequest = (categoryId: any) => ({
  type: 'FINISH_REQUEST',
  payload: {categoryId}
});

export const fetchRanking = (categoryId: any) => {
  return async (dispatch: any) => {
    dispatch(startRequest(categoryId));

    const queryString = qs.stringify({
      appid: API_ID,
      category_id: categoryId
    });

    try {
      const responce = await fetchJsonp(`${API_URL}?${queryString}`);
      const data = await responce.json();
      dispatch(receiveData(categoryId, null, data));
    } catch (err) {
      dispatch(receiveData(categoryId, err));
    }
    dispatch(finishRequest(categoryId));
  };
};
