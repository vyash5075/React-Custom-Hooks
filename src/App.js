import './App.css';
import ToggleComponent from  '../src/Toggle/ToggleComponent'
import TimeOutComponent from '../src/useTimout/TimeCompoent'
import DebounceComponent from '../src/useDebounce/DebounceComponent'
import UpdateEffect from '../src/useUpdateEffect/UpdateEffectComponent'
import UseArray from '../src/useArray/ArrayComponent'
function App() {
  return (
    <div className="App">
      <ToggleComponent/>
      <TimeOutComponent/> 
      <DebounceComponent/>
     
      <UpdateEffect/>
     <UseArray/>
    </div>
  );
}

export default App;
