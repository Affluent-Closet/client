import React, { ReactElement } from 'react';
import styled from 'styled-components';

type CheckBoxProps = React.InputHTMLAttributes<HTMLInputElement>;

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
