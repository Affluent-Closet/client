import { palette, PaletteKeyTypes } from 'libs/styles/palette';
import React, { ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface ButtonStyle {
  width?: string;
  height?: string;
  buttonColor?: PaletteKeyTypes;
  hasBorder?: boolean;
  borderColor?: PaletteKeyTypes;
  borderRadius?: string;
  fontColor?: string;
  fontSize?: string;
  fontWeight?: string;
  hoverButtonColor?: PaletteKeyTypes;
  hoverFontColor?: PaletteKeyTypes;
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
    buttonColor = 'backgroundColor',
    hasBorder = false,
    borderColor = 'border',
    borderRadius = '4px',
    fontColor = 'black',
    fontSize = '14px',
    fontWeight = '500',
    hoverButtonColor = 'mainColor',
    hoverFontColor = 'backgroundColor',
  }) => css`
    width: ${width};
    height: ${height};
    background-color: ${palette[buttonColor]};
    border: ${hasBorder ? `1px solid ${palette[borderColor]}` : 'none'};
    border-radius: ${borderRadius};
    color: ${fontColor};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    &:hover {
      background-color: ${palette[hoverButtonColor]};
      color: ${palette[hoverFontColor]};
    }
  `}
`;

function Button({ className, children, ...rest }: ButtonProps): ReactElement {
  return (
    <ButtonStyled className={className} {...rest}>
      {children}
    </ButtonStyled>
  );
}

export default React.memo(Button);
