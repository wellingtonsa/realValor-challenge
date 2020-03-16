import { IChartState, ChartActionTypes } from '../types';
import { RECEIVE_HISTORICAL,RESET_HISTORICAL } from '../actions/actionTypes';

const initialState: IChartState = {
  labels: [],
  datasets:[
  {
      label: '',
      backgroundColor: '',
      data: []
  }
  ]
};

export const ChartReducer = (state = initialState, action: ChartActionTypes): IChartState => {
  switch (action.type) {
    case RECEIVE_HISTORICAL:
      return action.payload;
      
      case RESET_HISTORICAL:
        return ({
          labels: [],
            datasets:[
              {
                label: '',
                backgroundColor: '',
                data: []
              }
            ]
        })
    default:
      return state;
  }
};
