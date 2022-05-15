import React, { useCallback, useState } from 'react';

export default function useForm<T>(initialValues: T): {
  form: T;
  onChangeForm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onCustomChange: (name: string, value: string | string[]) => void;
  onResetForm: () => void;
} {
  const [form, setForms] = useState(initialValues);

  const onChangeForm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setForms({ ...form, [name]: value });
    },
    [form],
  );

  const onResetForm = useCallback(() => {
    setForms(initialValues);
  }, [initialValues]);

  const onCustomChange = useCallback(
    (name: string, value: string | string[]) => {
      setForms({ ...form, [name]: value });
    },
    [form],
  );
  return {
    form,
    onChangeForm,
    onResetForm,
    onCustomChange,
  };
}
