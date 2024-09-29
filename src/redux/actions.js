import { fetchCategories, fetchProductsByCategory } from '../api';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getCategories = () => async (dispatch) => {
  try {
    const response = await fetchCategories();
    dispatch({ type: GET_CATEGORIES, payload: response.data });
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

export const getProducts = (category = '', limit = 10, skip = 0) => async (dispatch) => {
  try {
    const response = await fetchProductsByCategory(category, limit, skip);
    dispatch({ type: GET_PRODUCTS, payload: response.data });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
