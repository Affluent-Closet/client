import ModalTemplate from 'components/common/ModalTemplat';
import React from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';
import styled from 'styled-components';

interface Props {
  onToggleModal: () => void;
  onCompletPost: (data: Address) => void;
}

const ModalInnerStyled = styled.div`
  padding: 10px;
`;

function AddressModal({ onCompletPost, onToggleModal }: Props) {
  const onClose = () => {
    onToggleModal();
  };

  return (
    <ModalTemplate width={500} height={418} onToggleModal={onToggleModal}>
      <ModalInnerStyled>
        <DaumPostcode onComplete={onCompletPost} onClose={onClose} />
      </ModalInnerStyled>
    </ModalTemplate>
  );
}

export default AddressModal;
