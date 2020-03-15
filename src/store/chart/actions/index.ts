import { IChartState } from '../types';
import * as actionTypes from './actionTypes';

export const Historical = (value:number, time:number, coin:string) => ({
  type: actionTypes.HISTORICAL,
  payload: {
    value,
    time,
    coin
  },
});

export const ReceiveHistorical = (chart: IChartState) => ({
  type: actionTypes.RECEIVE_HISTORICAL,
  payload: chart,
});

export const HistoricalError = (message:string, error: boolean) => ({
  type: actionTypes.RECEIVE_HISTORICAL,
  payload: {
    message,
    error,
  },
});

export const ResetHistorical = () => ({
  type: actionTypes.RESET_HISTORICAL,
});