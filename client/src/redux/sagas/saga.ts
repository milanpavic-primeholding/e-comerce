import { takeLatest, call, put } from 'redux-saga/effects';
import apolloClient from '../../graphql/apolloClient';
import { GET_PRODUCTS_QUERY } from '../../graphql/queries/productsQueries';
import { GET_CATEGORIES_QUERY } from '../../graphql/queries/categoriesQueries';
import { setCategories } from '../actions/categoriesActions';
import { setProducts } from '../actions/productsActions';
import { categoriesTypes } from '../actionTypes/categoriesTypes';
import { productTypes } from '../actionTypes/productTypes';
import { Product } from '../reducers/productsReducer';

async function getProductsRequest() {
	try {
		const response = await apolloClient.query({ query: GET_PRODUCTS_QUERY });
		if (!response || !response.data) throw new Error("Can't get products");
		return response.data.products;
	} catch (error) {
		throw error;
	}
}

async function getCategoriesRequest() {
	try {
		const response = await apolloClient.query({ query: GET_CATEGORIES_QUERY });
		if (!response || !response.data) throw new Error("Can't get categories");
		return response.data.categories;
	} catch (error) {
		throw error;
	}
}

function* getProductsHandler() {
	const products: Product[] = yield call(getProductsRequest);
	yield put(setProducts(products));
}

function* getCategoriesHandler() {
	const products: Product[] = yield call(getCategoriesRequest);
	yield put(setCategories(products));
}

export default function* rootSaga() {
	// yield all([getProductsSaga()]);
	yield takeLatest(productTypes.GET_PRODUCTS, getProductsHandler);
	yield takeLatest(categoriesTypes.GET_CATEGORIES, getCategoriesHandler);
}
