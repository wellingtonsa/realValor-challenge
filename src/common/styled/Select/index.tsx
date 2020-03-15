import React from 'react';
import { Container } from './index.styles';

interface Props {
    options: string[];
    label?: string;
    onSelect(value:string): void;
    selected: string;
}

const Select: React.SFC<Props> = ({
    options, label, onSelect, selected
}) => {
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        onSelect(e.target.value)
    }
  return(
      <Container>
          {label && (<span>{label}</span>)}
          <select
          value={selected}
          onChange={handleChange}>
            {options.map((op, i) => (
              <option key={i} value={op}>{op}</option>
            ))}
          </select>
      </Container>
  )
}


  export default Select;