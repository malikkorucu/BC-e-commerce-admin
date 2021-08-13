import createSagaMiddleware from '@redux-saga/core';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { userReducer } from './user';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleWareList = [sagaMiddleware];

export const rootReducer = combineReducers({
  userReducer,
});

const str = createStore(rootReducer, applyMiddleware(...middleWareList));

sagaMiddleware.run(sagas);

export const store = str;
