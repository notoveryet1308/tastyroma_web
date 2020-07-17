import {
  put,
  call
} from 'redux-saga/effects';

import {
  getDesiItems,
  desiItemFetchFailure,
  desiItemFetchSuccess,
  desiItemLoading
} from '../action/desi';

const getData = async () => {
  const response = await fetch("http://localhost:4001/desi");
  const result = response.json();
  if (response.status >= 400) {
    throw new Error(response.error);
  }
  return result;
}
export function* getDesiItemData() {
  yield put(desiItemLoading());
  try {
    const result = yield call(getData);
    console.log(result)
    yield put(getDesiItems(result.data));
    yield put(desiItemFetchSuccess());
  } catch (err) {
    yield put(desiItemFetchFailure(err.message));
  }
}