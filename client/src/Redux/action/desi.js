import {desi} from '../constants';

export const getDesiItems = (data)=>({
  type: desi.getAllDesiItems,
  payload: data
});

export const desiItemFetchFailure = (err)=>({
  type: desi.desiItemFailure,
  payload: err
});

export const desiItemFetchSuccess = ()=>({
  type: desi.desiItemFetchSuccess,
  payload: true
})

export const desiItemFetchInitialize = ()=>({
  type: desi.desiItemFetchInitialize
})

export const desiItemLoading = ()=>({
  type: desi.desiItemLoading,
  payload: true
});