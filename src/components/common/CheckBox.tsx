import React, { ReactElement } from 'react';
import styled from 'styled-components';

const CheckBoxStyled = styled.input<
  React.InputHTMLAttributes<HTMLInputElement>
>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;
  margin-right: 6px;
`;

function CheckBox({
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>): ReactElement {
  return <CheckBoxStyled type="checkbox" {...rest} />;
}

export default CheckBox;
