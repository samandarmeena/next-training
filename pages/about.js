import MyLayout from '../components/MyLayout';
import { useReducer } from 'react';
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const about = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyLayout>
      Count : {state.count}
      <p>This is the about page </p>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </MyLayout>
  );
};
export default about;
