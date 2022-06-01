import React from 'react';
import styled from 'styled-components';

const RegisterH2 = styled.h2`
  margin: 15px 0px 10px 4px;
`;

interface Props {
  label: string;
}

function RegisterFormLabel({ label }: Props) {
  return (
    <RegisterH2>
      {label} <sup>*</sup>
    </RegisterH2>
  );
}

export default React.memo(RegisterFormLabel);
