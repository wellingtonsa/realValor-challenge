import {
  HISTORICAL, RECEIVE_HISTORICAL, HISTORICAL_ERROR, RESET_HISTORICAL,
} from '../actions/actionTypes';

interface IDataSet {
  label: string;
  backgroundColor: string;
  data:  number[]
}

export interface IChartState {
  labels: string[];
  datasets: IDataSet[];
}

interface ReceiveHistoricalAction {
  type: typeof RECEIVE_HISTORICAL;
  payload: IChartState;
}

interface HistoricalAction {
  type: typeof HISTORICAL;
  payload: {
    value: number;
    time: number;
    coin: string;
  };
}

interface ResetHistoricalAction {
  type: typeof RESET_HISTORICAL
}


export interface HistoricalErrorAction {
  type: typeof HISTORICAL_ERROR;
  payload: {
    message: string,
    error: boolean
  };
}


export type ChartActionTypes =
  | ReceiveHistoricalAction
  | HistoricalAction
  | HistoricalErrorAction
  | ResetHistoricalAction
