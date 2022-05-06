import { palette } from 'libs/styles/palette';
import transitions from 'libs/styles/transitions';
import React from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';

interface IModalInnerStyled {
  width: number;
  height: number;
}

interface ModalTemplateProps extends IModalInnerStyled {
  children: React.ReactNode;
  onToggleModal: () => void;
}

const ModalTemplateBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const ModalInner = styled.div<IModalInnerStyled>`
  position: absolute;
  z-index: 9999;
  background-color: white;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 12px;
  animation: ${transitions.fadeIn} 0.4s ease-in-out;
`;

const ModalBackground = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${palette.black};
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.4;
`;

function ModalTemplate({
  width,
  height,
  children,
  onToggleModal,
  ...rest
}: ModalTemplateProps) {
  return (
    <ModalPortal>
      <ModalTemplateBlock onMouseDown={onToggleModal} {...rest}>
        <ModalInner
          width={width}
          height={height}
          onMouseDown={(e) => e.stopPropagation()}
        >
          {children}
        </ModalInner>
        <ModalBackground />
      </ModalTemplateBlock>
    </ModalPortal>
  );
}

export default ModalTemplate;
