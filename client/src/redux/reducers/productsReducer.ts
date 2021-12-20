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

interface ActionGetProducts {
	type: productTypes.SET_PRODUCTS;
	payload: Product[];
}

type Action = ActionGetProducts;

interface InitialState {
	products: Product[];
}

const initialState: InitialState = {
	products: [],
};

const productsReducer = (state = initialState, { type, payload }: Action) => {
	switch (type) {
		case productTypes.SET_PRODUCTS:
			return { products: payload };
		default:
			return state;
	}
};

export default productsReducer;
