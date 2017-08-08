import get from 'lodash/get';
import {
  FETCH_PREFERENCES_SUCCESS,
  LOCALE_CHANGED,
  LOGIN,
  PROFILE_UPDATED,
  PREFERENCES_UPDATED,
  THEME_AUTO_CHANGED,
} from '../constants';

const initialState = {
  locale: 'en',
  theme: 'light',
  autoChangeTheme: true,
  experimental: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOCALE_CHANGED:
      return {
        ...state,
        locale: action.locale,
      };
    case LOGIN:
      return {
        ...state,
        locale: get(action, `response.entities.users[${action.response.result}].locale`, 'en'),
      };
    case PROFILE_UPDATED: {
      const locale = get(action, `response.entities.users[${action.response.result}].locale`);
      if (locale !== state.locale) {
        return { ...state, locale };
      }
      return state;
    }
    case THEME_AUTO_CHANGED:
      return {
        ...state,
        theme: action.theme,
      };
    case FETCH_PREFERENCES_SUCCESS:
    case PREFERENCES_UPDATED:
      return {
        ...state,
        theme: action.preferences.theme,
        autoChangeTheme: action.preferences.theme === 'auto',
        experimental: action.preferences.enable_experimental_features,
      };
    default:
      return state;
  }
}
