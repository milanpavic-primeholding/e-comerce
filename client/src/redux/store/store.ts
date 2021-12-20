import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from '../reducers/productsReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import rootSaga from '../sagas/saga';

const reducer = combineReducers({
	products: productsReducer,
	categories: categoriesReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const initialState = {};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof reducer>;
export default store;
