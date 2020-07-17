import {
  desi
} from '../constants';

const INITIAL_STATE = {
  data: [],
  loading: false,
  success: false,
  error: null,
  initiate: false
}

const desiReducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case desi.getAllDesiItems:
      return {
        ...state,
        data: payload,
          loading: false
      };
    case desi.desiItemFetchInitialize:
      return {
        ...state,
        initiate: true,
          success: false
      };
    case desi.desiItemFetchSuccess:
      return {
        ...state,
        success: true,
          loading: false
      };
    case desi.desiItemFailure:
      return {
        ...state,
        error: payload,
          success: true,
          loading: false
      };
    case desi.desiItemLoading:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

export default desiReducer;