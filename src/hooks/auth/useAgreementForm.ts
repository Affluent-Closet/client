import { IAgreementFormTypes } from 'model/auth';
import React, { useCallback, useMemo, useState } from 'react';

export default function useAgreementForm(): IAgreementFormTypes {
  const [agreementList, setAgreementList] = useState([
    {
      name: 'over14year',
      text: '만 14세 이b상입니다',
      isChecked: false,
      isModal: false,
    },
    {
      name: 'privacyPolicy',
      text: '개인정보 수집/이용에 동의합니다.',
      isChecked: false,
      isModal: true,
    },
    {
      name: 'termsAndConditions',
      text: 'Afflunt Closet 약관에 동의합니다.',
      isChecked: false,
      isModal: true,
    },
  ]);

  // 전체 동의 checkbox의 check유무와 boolean 값 확인
  const isAllChecked = useMemo(() => {
    return agreementList.every((item) => item.isChecked);
  }, [agreementList]);

  // 전체 동의
  const onAllCheck = useCallback(() => {
    setAgreementList(
      agreementList.map((agreement) => ({
        ...agreement,
        isChecked: !isAllChecked,
      })),
    );
  }, [agreementList]);

  // 각 checkbox의 onChange
  const onChangeCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name } = e.target;
      setAgreementList(
        agreementList.map((agreement) => ({
          ...agreement,
          isChecked:
            name === agreement.name
              ? !agreement.isChecked
              : agreement.isChecked,
        })),
      );
    },
    [agreementList],
  );

  return { agreementList, isAllChecked, onAllCheck, onChangeCheck };
}
