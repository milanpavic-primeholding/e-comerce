import { takeLatest, call, put } from 'redux-saga/effects';
import apolloClient from '../../graphql/apolloClient';
import { GET_PRODUCTS_QUERY, GET_PRODUCT_QUERY } from '../../graphql/queries/productsQueries';
import { GET_CATEGORIES_QUERY } from '../../graphql/queries/categoriesQueries';
import { setCategories } from '../actions/categoriesActions';
import { ActionGetProducts, setProducts, setProduct, ActionGetProduct } from '../actions/productsActions';
import { categoriesTypes } from '../actionTypes/categoriesTypes';
import { productTypes } from '../actionTypes/productTypes';
import { Product } from '../reducers/productsReducer';

// Products
async function getProductsRequest(action: ActionGetProducts) {
	const filter = action.payload;
	try {
		const response = await apolloClient.query({
			query: GET_PRODUCTS_QUERY,
			variables: { filter },
		});
		if (!response || !response.data) throw new Error("Can't get products");
		return response.data.products;
	} catch (error) {
		throw error;
	}
}

function* getProductsHandler(action: ActionGetProducts) {
	const products: Product[] = yield call(() => getProductsRequest(action));
	yield put(setProducts(products));
}

// Product
async function getProductRequest(action: ActionGetProduct) {
	const id = action.payload;
	try {
		const response = await apolloClient.query({
			query: GET_PRODUCT_QUERY,
			variables: { productId: id },
		});
		if (!response || !response.data) throw new Error("Can't get product");
		return response.data.product;
	} catch (error) {
		throw error;
	}
}

function* getProductHandler(action: ActionGetProduct) {
	const product: Product | null = yield call(() => getProductRequest(action));
	yield put(setProduct(product));
}

// Category
async function getCategoriesRequest() {
	try {
		const response = await apolloClient.query({ query: GET_CATEGORIES_QUERY });
		if (!response || !response.data) throw new Error("Can't get categories");
		return response.data.categories;
	} catch (error) {
		throw error;
	}
}

function* getCategoriesHandler() {
	const products: Product[] = yield call(getCategoriesRequest);
	yield put(setCategories(products));
}

export default function* rootSaga() {
	// yield all([getProductsSaga()]);
	yield takeLatest(productTypes.GET_PRODUCTS, getProductsHandler);
	yield takeLatest(productTypes.GET_PRODUCT, getProductHandler);
	yield takeLatest(categoriesTypes.GET_CATEGORIES, getCategoriesHandler);
}
