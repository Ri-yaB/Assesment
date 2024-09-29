import { GET_CATEGORIES, GET_PRODUCTS } from './actions';

const initialState = {
  categories: [],
  products: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case GET_PRODUCTS:
      return { ...state, products: action.payload.products || [] };
    default:
      return state;
  }
};

export default rootReducer;  
