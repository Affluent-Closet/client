import { useState } from 'react';
import { Address } from 'react-daum-postcode';

export type UseDaumAdress = [string, string, (data: Address) => void];

export default function useDaumAdress(): UseDaumAdress {
  const [zonecode, setZonecode] = useState(''); // 우편번호
  const [daumAddress, setDaumAddress] = useState(''); // 상세주소

  const onCompletePost = (data: Address) => {
    let fullAddr = data.address;
    let extraAddr = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr +=
          extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }

    setZonecode(data.zonecode);
    setDaumAddress(fullAddr);
  };

  return [zonecode, daumAddress, onCompletePost];
}
