import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form } from './App.styles';
import GlobalStyle from './common/styled/global';
import Select from './common/styled/Select';
import Button from './common/styled/Button';
import store from './store';
import Chart  from './components/Chart';
import { Historical, ResetHistorical } from './store/chart/actions';
import { ImagesPath } from './constants/path';
import { Provider } from 'react-redux';
import { ApplicationState } from './store';

const App: React.SFC = () => {

  const dispatch = useDispatch();
  const chart = useSelector((state:ApplicationState) => state.chart);

  const coins = [{ target:'Bitcoin', value: 'bitcoin'}, { target:'Tesouro Direto pré-fixado', value: 'tesouro'}]
  const times = [{ target:'1 ano atrás', value: 1}, { target:'2 anos atrás', value: 2}];
  const values = [{ target:'2 mil reais', value: 2000}, { target:'10 mil reais', value: 10000}];

  const [coin, setCoin] = useState<string>(coins[0].value);
  const [time, setTime] = useState<number>(times[0].value);
  const [value, setValue] = useState<number>(values[0].value);
 
 
  const handleCalculateHistorical = async () => {
    dispatch(Historical(value, time, coin));
  }

  const handleResetSimulation = () => {
    dispatch(ResetHistorical());
  }

  
  return(
    <Provider store={store}>
      <Container>
        {chart.labels.length === 0 ?(
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
          <Button label="Refazer simulação" onClick={handleResetSimulation}  styledObject={{ width: '505px', marginBottom: '5px'}}/>
          {chart.labels.length > 0  &&(<Chart data={chart}/>)}
          </>)}
        <GlobalStyle/>
      </Container>
    </Provider>
  )
}
export default App;
