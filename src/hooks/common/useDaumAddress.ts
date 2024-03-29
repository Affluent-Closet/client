import { Address } from 'react-daum-postcode';

type UseDaumAdress = (data: Address) => void;

export default function useDaumAdress(
  onChangeAddress: (address1: string, address2: string) => void,
): UseDaumAdress {
  // const [zonecode, setZonecode] = useState(''); // 우편번호

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
    onChangeAddress(fullAddr, extraAddr);
  };

  return onCompletePost;
}
