import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { actions } from './store/counterSlice';
// import {actions} from './store/index';


function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addBy(5))
  }
  const adddBy = () => {
    dispatch(actions.addBy(10))
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>Add By 5</button>
      <button onClick={adddBy}>Add By 10</button>
    </div>
  );
}

export default App;