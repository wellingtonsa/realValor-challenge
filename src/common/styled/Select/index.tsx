import React from 'react';
import { Container } from './index.styles';


interface IOption {
  value: any;
  target: any;
}
interface Props {
    options: IOption[];
    label?: string;
    onSelectValue(value:any): void;
    selected: any;
}

const Select: React.SFC<Props> = ({
    options, label, onSelectValue, selected
}) => {
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
      onSelectValue(e.target.value)
    }
  return(
      <Container>
          {label && (<span>{label}</span>)}
          <select
          value={selected}
          onChange={handleChange}>
            {options.map((op:IOption, i) => (
              <option key={i} value={op.value}>{op.target}</option>
            ))}
          </select>
      </Container>
  )
}


  export default Select;