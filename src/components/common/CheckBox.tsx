import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: 'primary' | 'secondary';
  isChecked?: boolean;
  onClick?: () => void;
}

const CheckBoxStyled = styled.input<CheckBoxProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;
  margin-right: 6px;
`;

function CheckBox({ ...rest }: CheckBoxProps): ReactElement {
  console.log(rest);
  return <CheckBoxStyled type="checkbox" {...rest} />;
}

export default CheckBox;
