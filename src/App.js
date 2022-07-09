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
import UseFetch from '../src/useFetch/FetchComponent'
import UseScript from '../src/useScript/ScriptComponent'
import UseEventListener from '../src/useEventListener/EventListenerComponent'
import UseOnScreen from '../src/useOnScreen/OnScreenComponent'
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
     <UseFetch/>
     <UseScript/>
     <UseEventListener/>
     <UseOnScreen/>
    </div>
  );
}

export default App;
