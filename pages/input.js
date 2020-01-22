import { useRef } from 'react';
import MyLayout from '../components/MyLayout';
const input = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <MyLayout>
      <input ref={inputEl} type='text' />
      <button onClick={onButtonClick}>Focus the input</button>
    </MyLayout>
  );
};
export default input;
