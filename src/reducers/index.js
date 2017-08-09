import {
  combineReducers,
  createStore,
} from 'redux';
// import { LOGOUT } from '../constants';
import user from './user';
// import group from './group';
// import topic from './topic';
// import media from './media';
// import modal from './modal';
// import banner from './banner';
// import search from './search';
import session from './session';
// import message from './message';
// import attachment from './attachment';
// import settings from './settings';
// import notification from './notification';
// import directMessage from './directMessage';

const allReducers = combineReducers({
  // banner,
  user,
  // group,
  // topic,
  // media,
  // modal,
  // search,
  session,
  // message,
  // attachment,
  // settings,
  // notification,
  // directMessage,
});

const store = createStore(allReducers);

export default store;
