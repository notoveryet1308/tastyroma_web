import {
  call,
  put
} from 'redux-saga/effects';

import {
  southIndianMenuLoading,
  southIndianMenuSuccess,
  southIndianMenuFailure
} from '../action/southIndian';

const getData = async () => {
  const response = await fetch("http://localhost:4001/south-indian");
  const result = response.json();
  console.log(result)
  if (response.status >= 400) {
    throw new Error(response.error);
  }
  return result;
}

export function* getSouthIndianMenuList() {

  try {
    yield put(southIndianMenuLoading());
    const result = yield call(getData)
    yield put(southIndianMenuSuccess(result.data));

  } catch (err) {
    yield put(southIndianMenuFailure(err));
  }
}