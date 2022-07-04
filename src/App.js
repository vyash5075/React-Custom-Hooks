import './App.css';
import ToggleComponent from  '../src/Toggle/ToggleComponent'
import TimeOutComponent from '../src/useTimout/TimeCompoent'
import DebounceComponent from '../src/useDebounce/DebounceComponent'
function App() {
  return (
    <div className="App">
      <ToggleComponent/>
      <TimeOutComponent/>
      <DebounceComponent/>
     
    </div>
  );
}

export default App;
