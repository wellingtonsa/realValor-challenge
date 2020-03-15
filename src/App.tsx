import React,{ useState } from 'react';
import { Container, Form } from './App.styles';
import GlobalStyle from './common/styled/global';
import Select from './common/styled/Select';
import Button from './common/styled/Button';
import Chart, { IChart } from './components/Chart';
import { ImagesPath } from './constants/path';
import * as CoinService from './services/CoinService';

const App: React.SFC = () => {

  const coins = [{ target:'Bitcoin', value: 'bitcoin'}, { target:'Tesouro Direto pré-fixado', value: 'tesouro'}]
  const times = [{ target:'1 ano atrás', value: 1}, { target:'2 anos atrás', value: 2}];
  const values = [{ target:'2 mil reais', value: 2}, { target:'10 mil reais', value: 10}];

  const [coin, setCoin] = useState<string>(coins[0].value);
  const [time, setTime] = useState<number>(times[0].value);
  const [value, setValue] = useState<number>(values[0].value);
  const [chart, setChart] = useState<IChart>();
  const handleCalculateHistorical = async () => {
    let chart  = await CoinService.calcBitCoinHistorical(value, time);
    setChart(chart)
  }


  return(
    <Container>
      {!chart?(
      <Form>
      <img src={ImagesPath.LOGO} alt=""/>
        <h3>Calcule seu investimento aqui! Basta preencher os dados.</h3>
        <Select 
        label="Selecione o investimento" 
        options={coins} 
        selected={coin} 
        onSelectValue={setCoin}/>
       <Select 
        label="Tempo do investimento" 
        options={times} 
        selected={time} 
        onSelectValue={setTime}/>
       <Select 
        label="Valor do investimento" 
        options={values} 
        selected={value} 
        onSelectValue={setValue}/>
        <Button label="Calcular" onClick={handleCalculateHistorical}/>
      </Form>)
      :(<>
        {chart &&(<Chart data={chart}/>)}
        </>)}
      <GlobalStyle/>
    </Container>
  )
}
export default App;
