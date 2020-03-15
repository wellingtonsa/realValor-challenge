import {
  combineReducers, AnyAction, createStore, applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Reducer } from 'react';
import { all, fork } from 'redux-saga/effects';

import { IChartState } from './chart/types';
import { UserReducer } from './chart/reducers';
import { watchChart } from './chart/sagas';

export interface ApplicationState {
  chart: IChartState;
}

function* rootSaga() {
  yield all([
    fork(watchChart),
  ]);
}

const reducers = combineReducers<ApplicationState>({
  chart: UserReducer,
});

const rootReducer = reducers;

const reducerCreator = ():
Reducer<ApplicationState, AnyAction> => rootReducer;

export { rootSaga, reducerCreator };


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);


export default store;
