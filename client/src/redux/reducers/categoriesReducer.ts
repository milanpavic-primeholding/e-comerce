import { categoriesTypes } from '../actionTypes/categoriesTypes';

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

const categoriesReducer = (state = initialState, { type, payload }: Action) => {
	switch (type) {
		case categoriesTypes.SET_CATEGORIES:
			return { categories: payload };
		default:
			return state;
	}
};

export default categoriesReducer;
