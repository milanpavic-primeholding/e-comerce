import { Reducer } from 'redux';
import { productTypes } from '../actionTypes/productTypes';

export interface Product {
	id: string;
	name: string;
	description: string;
	quantity: number;
	image: string;
	price: number;
	onSale: boolean;
	categoryId: string;
}

export interface ActionSetProducts {
	type: productTypes.SET_PRODUCTS;
	payload: Product[];
}

export interface ActionSetProduct {
	type: productTypes.SET_PRODUCT;
	payload: Product | null;
}

type Action = ActionSetProducts | ActionSetProduct;

interface InitialState {
	products: Product[];
	product: Product | null;
}

const initialState: InitialState = {
	products: [],
	product: null,
};

const productsReducer: Reducer<InitialState, Action> = (state = initialState, action): InitialState => {
	switch (action.type) {
		case productTypes.SET_PRODUCTS:
			return { ...state, products: action.payload };
		case productTypes.SET_PRODUCT:
			return { ...state, product: action.payload };
		default:
			return state;
	}
};

export default productsReducer;
