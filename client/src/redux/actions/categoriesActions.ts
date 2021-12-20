import { categoriesTypes } from '../actionTypes/categoriesTypes';
import { Category } from '../reducers/categoriesReducer';

export const getCategories = () => {
	return {
		type: categoriesTypes.GET_CATEGORIES,
	};
};

export const setCategories = (payload: Category[]) => {
	return {
		type: categoriesTypes.SET_CATEGORIES,
		payload,
	};
};
