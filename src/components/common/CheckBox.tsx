import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: 'primary' | 'secondary';
}

const CheckBoxStyled = styled.input<CheckBoxProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;
  margin-right: 6px;
`;

function CheckBox({ ...rest }: CheckBoxProps): ReactElement {
  return <CheckBoxStyled type="checkbox" {...rest} />;
}

export default CheckBox;
