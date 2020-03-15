import React, { CSSProperties } from 'react';
import { Container } from './index.styles';

interface Props {
    label: string;
    onClick(): void;
    styledObject?: CSSProperties;
}

const Button: React.SFC<Props> = ({
  label, onClick, styledObject = {},
}) => {
  return (
    <Container type="button" onClick={onClick} style={styledObject}>
      <span>
        {label}
      </span>
    </Container>
  );
}


export default Button;