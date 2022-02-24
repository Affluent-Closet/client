import React, { ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface ButtonStyle {
  width?: string;
  height?: string;
  buttonColor?: string;
  hasBorder?: boolean;
  borderColor?: string;
  borderRadius?: string;
  fontColor?: string;
  fontSize?: string;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyle {
  children: ReactNode;
  className?: string;
}

const ButtonStyled = styled.button<ButtonStyle>`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${({
    width = 'auto',
    height = 'auto',
    buttonColor = 'white',
    hasBorder = false,
    borderColor = 'white',
    borderRadius = '4px',
    fontColor = 'black',
    fontSize = '14px',
  }) => css`
    width: ${width};
    height: ${height};
    background-color: ${buttonColor};
    border: ${hasBorder ? `1px solid ${borderColor}` : 'none'};
    border-radius: ${borderRadius};
    color: ${fontColor};
    font-size: ${fontSize};
  `}
`;

function Button({ className, children, ...rest }: ButtonProps): ReactElement {
  return (
    <ButtonStyled className={className} {...rest}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
