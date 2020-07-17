import {
  takeLatest
} from 'redux-saga/effects';

import {
  desi,
  user,
  southIndian
} from '../constants';
import {
  getDesiItemData
} from './desi';
import {
  signupUser,
  loginUser
} from './user';
import {
  getSouthIndianMenuList
} from './southIndian';

export default function* watcherSaga() {
  yield takeLatest(desi.desiItemFetchInitialize, getDesiItemData);
  yield takeLatest(southIndian.southIndianItemFetchInitialize, getSouthIndianMenuList);
  yield takeLatest(user.signin, signupUser);
  yield takeLatest(user.login, loginUser);
}