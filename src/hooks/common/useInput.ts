import React, { useState } from 'react';

export default function useInput(initialValue: string | number) {
  const [value, setValue] = useState(initialValue);
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
  };

  return [value, onChange] as const;
}
