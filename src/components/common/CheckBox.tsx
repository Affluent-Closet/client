import React, { ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface CheckBoxStyle {
  width: string;
  height: string;
}

// interface CheckBoxProps
//   extends React.InputHTMLAttributes<HTMLInputElement>,
//     CheckBoxStyle {
//   children: ReactNode;
//   variant: "primary" | "secondary";
// }

const CheckBoxStyled = styled.input<CheckBoxStyle>`
  cursor: pointer;
  margin-right: 6px;

  ${({ width = 'auto', height = 'auto' }) => css`
    width: ${width};
    height: ${height};
  `}
`;

function CheckBox({ children, ...rest }: any): ReactElement {
  return (
    <CheckBoxStyled type="checkbox" {...rest}>
      {children}
    </CheckBoxStyled>
  );
}

export default CheckBox;
