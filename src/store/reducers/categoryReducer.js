import {CATEGORY_RECEIVED} from '../actions/categoryAction';


export default (state = null, action) => {
  switch (action.type) {
    case CATEGORY_RECEIVED:
      return action.category;
    default:
      return state;
  }
}
