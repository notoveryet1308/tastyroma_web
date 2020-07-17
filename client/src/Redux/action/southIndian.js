import {
  southIndian
} from '../constants';

export const southIndianMenuInitailize = () => ({
  type: southIndian.southIndianItemFetchInitialize,
});

export const southIndianMenuSuccess = (data) => ({
  type: southIndian.southIndianItemFetchSuccess,
  payload: data
});

export const southIndianMenuFailure = (data) => ({
  type: southIndian.southIndianItemFailure,
  payload: data
});

export const southIndianMenuLoading = () => ({
  type: southIndian.southIndianItemLoading,
  payload: true
});