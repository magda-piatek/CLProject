import {CATEGORY_SELECTED_RECEIVED} from '../actions/categoryAction';


export default (state = null, action) => {
  switch (action.type) {
    case CATEGORY_SELECTED_RECEIVED:
      return action.categorySelected;
    default:
      return state;
  }
}
