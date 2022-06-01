import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width: string;
  height: string;
  borderRadius?: string;
}

const InputStyled = styled.input<{ borderRadius: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${palette.grayLight};
  padding: 5.5px 12px 5.5px 10px;
  border-radius: ${({ borderRadius }) => borderRadius};
  outline: none;
`;

function Input({ width, height, borderRadius = '4px', ...rest }: InputProps) {
  return (
    <InputStyled
      {...rest}
      borderRadius={borderRadius}
      width={width}
      height={height}
    />
  );
}

export default React.memo(Input);
