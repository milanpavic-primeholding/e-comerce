import { productTypes } from '../actionTypes/productTypes';
import { Product } from '../reducers/productsReducer';

export const getProducts = () => {
	return {
		type: productTypes.GET_PRODUCTS,
	};
};

export const setProducts = (payload: Product[]) => {
	return {
		type: productTypes.SET_PRODUCTS,
		payload,
	};
};
