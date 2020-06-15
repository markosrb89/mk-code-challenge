import { CHANGE_INTERVAL_DELAY } from '../actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_INTERVAL_DELAY:
      return {
        ...state,
        intervalDelay: action.payload
      };
    default:
      return state;
  }
};