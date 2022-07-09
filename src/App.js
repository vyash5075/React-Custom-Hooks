import './App.css';
import ToggleComponent from  '../src/Toggle/ToggleComponent'
import TimeOutComponent from '../src/useTimout/TimeCompoent'
import DebounceComponent from '../src/useDebounce/DebounceComponent'
import UpdateEffect from '../src/useUpdateEffect/UpdateEffectComponent'
import UseArray from '../src/useArray/ArrayComponent'
import UsePrevious from '../src/usePrevious/PreviousComponent'
import UseStateWithHistory from '../src/useStateWithHistory/StateWithHistoryComponent'
import UseStorage from '../src/useStorage/StoageComponent'
import UseAsync from '../src/Use-Async/AsyncComponent'
function App() {
  return (
    <div className="App">
      <ToggleComponent/>
      <TimeOutComponent/> 
      <DebounceComponent/>
     
      <UpdateEffect/>
     <UseArray/>
     <UsePrevious/>
     <UseStateWithHistory/>
     <UseStorage/>
     <UseAsync/>
    </div>
  );
}

export default App;
