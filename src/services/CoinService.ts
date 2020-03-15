import api from '.'
import { IChart } from '../components/Chart'
import moment from 'moment';

interface IHistorical {
    bpi: Object;
    disclaimer: string;
    time: Object
}

export async function calcBitcoinHistorical(value:number, time:number){
   
    try {

        let endDate = moment(new Date()).format('YYYY-MM-DD');
        let startDate = moment(endDate).subtract(time, 'years').format('YYYY-MM-DD');

        const historical = await api.get(`/historical/close.json?start=${startDate}&end=${endDate}`)

        let data:IChart = {
            labels: [],
            datasets:[
            {
                label: 'Bitcoin',
                backgroundColor: '#f07d0b',
                data: []
            }
        ]

        };
        while (moment(startDate).isBefore(moment(endDate))) {
            let amount = ((historical.data as IHistorical).bpi as any)[moment(startDate).format('YYYY-MM-DD')]*value;
            data = {
                ...data,
                labels: [...data.labels, moment(startDate).format('DD/MM/YYYY')],
                datasets: [
                    {
                     ...data.datasets[0],
                     data: [...data.datasets[0].data, amount]
                    }
                ]
            };
            
            startDate = moment(startDate).add(1,'month').format('YYYY-MM-DD');
        }
        return data;
    } catch(err){
        return err.data;
    }      
}

export async function calcDirectTreasureHistorical(value:number, time:number){
    try {
        let endDate = moment(new Date()).format('YYYY-MM-DD');
        let startDate = moment(endDate).subtract(time, 'years').format('YYYY-MM-DD');

        const percentage:number = 0.008333333;

        let data:IChart = {
            labels: [],
            datasets:[
            {
                label: 'Tespuro Direto pré-fixado',
                backgroundColor: '#d3d3d3',
                data: []
            }
        ]

        };

        let amount:number = eval(value.toString());

        while (moment(startDate).isBefore(moment(endDate))) {
            amount = (amount + amount*percentage as number);
            data = {
                ...data,
                labels: [...data.labels, moment(startDate).format('DD/MM/YYYY')],
                datasets: [
                    {
                     ...data.datasets[0],
                     data: [...data.datasets[0].data, amount]
                    }
                ]
            };
            
            startDate = moment(startDate).add(1,'month').format('YYYY-MM-DD');
        }

        return data;
    }catch(err){
        return err.data;
    }

}