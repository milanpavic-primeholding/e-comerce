import { categoriesTypes } from '../actionTypes/categoriesTypes';
import { Reducer } from 'redux';

export interface Category {
	id: string;
	name: string;
}

interface ActionGetCategories {
	type: categoriesTypes.SET_CATEGORIES;
	payload: Category[];
}

type Action = ActionGetCategories;

interface InitialState {
	categories: Category[];
}

const initialState: InitialState = {
	categories: [],
};

const categoriesReducer: Reducer<InitialState, Action> = (state = initialState, action): InitialState => {
	switch (action.type) {
		case categoriesTypes.SET_CATEGORIES:
			return { categories: action.payload };
		default:
			return state;
	}
};

export default categoriesReducer;
