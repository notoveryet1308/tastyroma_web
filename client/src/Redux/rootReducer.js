import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {sideBar} from './reducer/openSidebar';
import desiReducer from './reducer/desi';
import cartReducer from './reducer/cart';
import userReducer from './reducer/user';
import southIndianReducer from './reducer/southIndian';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer', 'userReducer']
}

const rootReducer = combineReducers({
   sideBar,
   desiReducer,
   cartReducer,
   userReducer,
   southIndianReducer
})

export default persistReducer(persistConfig ,rootReducer);