import React,{ useState } from 'react';
import { Container, Form } from './App.styles';
import GlobalStyle from './common/styled/global';
import Select from './common/styled/Select';
import Button from './common/styled/Button';
import { ImagesPath } from './constants/path';


const App: React.SFC = () => {

  const coins = ['Bitcoin', 'Tesouro Direto pré-fixado']
  const times = ['1 ano atrás', '2 anos atrás'];
  const values = ['2 mil reais', '10 mil reais'];

  const [coin, setCoin] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [value, setValue] = useState<string>('');
  return(
    <Container>
      <Form>
      <img src={ImagesPath.LOGO} alt=""/>
        <h3>Calcule seu investimento aqui! Basta preencher os dados.</h3>
        <Select 
        label="Selecione o investimento" 
        options={coins} 
        selected={coin} 
        onSelect={setCoin}/>
       <Select 
        label="Tempo do investimento" 
        options={times} 
        selected={time} 
        onSelect={setTime}/>
       <Select 
        label="Valor do investimento" 
        options={values} 
        selected={value} 
        onSelect={setValue}/>
        <Button label="Calcular" onClick={() => {}}/>
      </Form>
      <GlobalStyle/>
    </Container>
  )
}
export default App;
