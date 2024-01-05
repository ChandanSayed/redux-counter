import './App.css';

function App() {
  return (
    <>
      <div className="container text-center">
        <h1>Redux Counter!!</h1>
        <div className="quantity">
          <div className="flex justify-center">
            <button>Decrement</button>
            <input type="number" value={'0'} />
            <button>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
