import {
  southIndian
} from '../constants';

const INITAIL_STATE = {
  data: [],
  loading: false,
  success: false,
  error: null,
  initiate: false
}

const southIndianReducer = (state = INITAIL_STATE, action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case southIndian.southIndianItemFetchInitialize:
      return {
        ...state,
        initiate: true
      }
      case southIndian.southIndianItemLoading:
        return {
          ...state,
          loading: payload,
            initiate: false
        };
      case southIndian.southIndianItemFetchSuccess:
        return {
          ...state,
          data: payload,
            success: true,
            loading: false,
            initiate: false
        };
      case southIndian.southIndianItemFailure:
        return {
          ...state,
          success: false,
            loading: false,
            error: payload
        };
      default:
        return state
  }
};

export default  southIndianReducer;