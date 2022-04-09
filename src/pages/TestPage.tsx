import { charCountState, textState } from 'atoms/textState';
import React, { ChangeEvent } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

function TestPage() {
  const [text, setText] = useRecoilState(textState);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const count = useRecoilValue(charCountState);
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
      count : {count + 1}
    </div>
  );
}

export default TestPage;
