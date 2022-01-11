import { productTypes } from '../actionTypes/productTypes';
import { ActionSetProducts, ActionSetProduct, Product } from '../reducers/productsReducer';

export interface ActionGetProducts {
	type: typeof productTypes.GET_PRODUCTS;
	payload?: { [key: string]: any };
}

export interface ActionGetProduct {
	type: typeof productTypes.GET_PRODUCT;
	payload?: { [key: string]: any };
}

export const getProducts = (filter?: ActionGetProducts['payload']): ActionGetProducts => ({
	type: productTypes.GET_PRODUCTS,
	payload: filter || {},
});

export const setProducts = (payload: Product[]): ActionSetProducts => ({
	type: productTypes.SET_PRODUCTS,
	payload,
});

export const getProduct = (productId: string): { type: ActionGetProduct['type']; payload: string } => ({
	type: productTypes.GET_PRODUCT,
	payload: productId,
});

export const setProduct = (payload: Product | null): ActionSetProduct => ({
	type: productTypes.SET_PRODUCT,
	payload,
});
