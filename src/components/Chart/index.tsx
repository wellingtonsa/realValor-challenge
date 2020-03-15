import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { Container, Details } from './index.styles';

interface IDataSet {
    label: string;
    backgroundColor: string;
    data:  number[]
};

export interface IChart {
    labels: string[];
    datasets: IDataSet[];
};

interface IProps {
    data: IChart
};

type Props = IProps; 

const Chart: React.SFC<Props> = ({ data }) => {
    moment.locale('pt-br');

    const [showDetails, setShowDetails] = useState<boolean>(false)
    
    const details = {
        startDate: data.labels[0],
        startValue: data.datasets[0].data[0],
        endValue: data.datasets[0].data[data.datasets[0].data.length - 1],
        amount: data.datasets[0].data[data.datasets[0].data.length - 1] - data.datasets[0].data[0],
    };  
    console.log(details)
    const handleShowDetails = () => {
        setShowDetails(!showDetails);
    }
    return (
        <>
        <Container>
            <h3>{`Veja aqui os resultados para ${data.datasets[0].label}`}</h3>
            <Line
            options={{ responsive: true }}
            data={data}/>
        </Container>
        <Details show={showDetails}>
            <div className="header" onClick={handleShowDetails}>
                <span>Clique aqui para ver detalhes</span>
            </div>
            <div className="content">
            <div className="line">
                <span>Data de início:</span>  
                <span>{details.startDate}</span>
            </div>
            <div className="line">
                <span>Valor inicial:</span>  
                <span>{details.startValue.toFixed(2)}</span>
            </div>
            <div className="line">
                <span>Valor final:</span>  
                <span>{details.endValue.toFixed(2)}</span>
            </div>
            <div className="line">
                <span>Lucro/Prejuízo:</span>  
                <span style={{ color: (details.amount > 0?'#00F300':'#F30000')}}>{details.amount.toFixed(2)}</span>
            </div>
            </div>
        </Details>
        </>
    )
}

export default Chart;