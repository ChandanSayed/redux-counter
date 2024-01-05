import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrementNumber, incrementNumber } from './action/Index';

function App() {
  const currentNumber = useSelector(state => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container text-center">
        <h1>Redux Counter!!</h1>
        <div className="quantity">
          <div className="flex justify-center">
            <button onClick={() => dispatch(decrementNumber())}>Decrement</button>
            <input type="number" value={currentNumber} onChange={e => e.target.value} />
            <button onClick={() => dispatch(incrementNumber())}>Increment</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
