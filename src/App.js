import './App.css';
import CartesianGraph from "./CartesianGraph";

function App() {
  const points = [
    { x: -1, y: 1},
    { x: 1, y: 1},
    { x: 2, y: 1},
    { x: 3, y: 1},
    { x: 4, y: 1},
  ];
  return (
    <div className="App" style={{height: '100vmin'}}>
      <CartesianGraph points={points}></CartesianGraph>
    </div>
  );
}

export default App;
