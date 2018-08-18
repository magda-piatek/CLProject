import request from '../../utils/request';
export const CATEGORY_RECEIVED = 'CATEGORY_RECEIVED';
export const CATEGORY_SELECTED_RECEIVED = 'CATEGORY_SELECTED_RECEIVED';

export const categoryReceivedAction = (category) => {
  return {
    type: CATEGORY_RECEIVED,
    category:category
  };
}

export const createCategory = (r) => { 
  return (dispatch) => {
    request(
      '/category',
      'POST', r)
//TODO catch
}
}

export const getCategory = () => {
  return (dispatch) => {
    request('/category', 'GET' )
    .then(r => dispatch(categoryReceivedAction(r)))
    //TODO catch
  }
}

export const categorySelect = (categorySelected) => {
 return {
    type: CATEGORY_SELECTED_RECEIVED,
    categorySelected:categorySelected
  };
}
export default {
  createCategory,
getCategory,
categorySelect
}
