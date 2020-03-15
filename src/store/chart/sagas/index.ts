import {
  all, takeEvery, put,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
  Historical, HistoricalError, ReceiveHistorical,
} from '../actions';
import { IChartState } from '../types';
import * as Coin from '../../../services/CoinService';

function* getHistorical(action: ReturnType<typeof Historical>) {
  try {
    const {
      payload: { value, time, coin },
    } = action;

    let data:IChartState;

    if(coin === 'bitcoin')
    data = yield Coin.calcBitcoinHistorical(value, time);
    else 
    data = yield Coin.calcDirectTreasureHistorical(value, time);

    yield put(ReceiveHistorical(data));
  } catch (err) {
    yield put(HistoricalError(err.message, err.error));
  }
}

export function* watchChart() {
  yield all([
    takeEvery(actionTypes.HISTORICAL, getHistorical),
  ]);
}
