import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Container, Details } from './index.styles';

interface IDataSet {
    label: string;
    backgroundColor: string;
    data:  number[]
}

interface IDetails {
    startDate: string;
    startValue: number;
    endValue: number
    amount: number;
}

export interface IChart {
    labels: string[];
    datasets: IDataSet[];
}

interface Props {
    data: IChart
}

const Chart: React.SFC<Props> = ({ data }) => {
    const [showDetails, setShowDetails] = useState<boolean>(false)
    const [details, setDetails] = useState<IDetails>({
        startDate: data.labels[0],
        startValue: data.datasets[0].data[0],
        endValue: data.datasets[0].data[data.datasets[0].data.length - 1],
        amount: data.datasets[0].data[data.datasets[0].data.length - 1] - data.datasets[0].data[0],
    });   


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
            <p>{details.startDate}</p>
            <p>{details.startValue}</p>
            <p>{details.endValue}</p>
            <p>{details.amount}</p>
            </div>
        </Details>
        </>
    )
}

export default Chart;