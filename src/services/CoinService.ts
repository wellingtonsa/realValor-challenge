import api from '.'
import { IChart } from '../components/Chart'
import moment from 'moment';

interface IHistorical {
    bpi: Object;
    disclaimer: string;
    time: Object
}

export async function calcBitCoinHistorical(value:number, time:number){
   
    try {
        // const bitcoinBRL = await api.get('/bpi/currentprice/BRL.json');
        let endDate = moment(new Date()).format('YYYY-MM-DD');
        let startDate = moment(endDate).subtract(time, 'years').format('YYYY-MM-DD');
        console.log(endDate, startDate)
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
                labels: [...data.labels, moment(startDate).format('YYYY-MM-DD')],
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