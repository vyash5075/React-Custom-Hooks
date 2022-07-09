import "./App.css";
import UseToggle from "../src/Toggle/ToggleComponent";
import UseTimeout from "../src/useTimout/TimeCompoent";
import UseDebounce from "../src/useDebounce/DebounceComponent";
import UseUpdateEffect from "../src/useUpdateEffect/UpdateEffectComponent";
import UseArray from "../src/useArray/ArrayComponent";
import UsePrevious from "../src/usePrevious/PreviousComponent";
import UseStateWithHistory from "../src/useStateWithHistory/StateWithHistoryComponent";
import UseStorage from "../src/useStorage/StoageComponent";
import UseAsync from "../src/Use-Async/AsyncComponent";
import UseFetch from "../src/useFetch/FetchComponent";
import UseScript from "../src/useScript/ScriptComponent";
import UseEventListener from "../src/useEventListener/EventListenerComponent";
import UseOnScreen from "../src/useOnScreen/OnScreenComponent";
import UseWindowSize from "../src/usWindowSize/WindowSizeComponent";
import UseDeepComapareeffect from '../src/useDeepCompareEffect/DeepCompareEffectComponent'
import UseMediaQuery from "./useMediaQuery/MediaQueryComponent";
import UseGeolocation from "./useGeolocation/GeolocaonComponent";
import UseSize from '../src/useSize/useSize'
import UseEffectOnce from '../src/useEffectOnce/EffectOnceComponent'
import UseClickOutside from '../src/useClickOutside/ClickOutSideComponent'
import UseDarkMode from '../src/useDarkMode/DarkModeComponent'
// import UseCopyToClipBoard from '../src/useCopyToClipBoard/CopyToClipBoardComponent'
// simport UseCookie from '../src/useCookie/CookieComponent'
import UseTranslation from "./useTranslation/TranslationComponent";
import UseOnlineStatus from "./useOnlineStatus/OnlineStatsComponent";
import UseRenderCount from "./useRenderCount/RenderCountComponent";
import UseDebugInformation from "./useDebugInformation/DebugInformationComponent";

function App() {
  return (
    <div className="App">
      {/* <UseToggle />
      <UseTimeout />
      <UseDebounce />
      <UseUpdateEffect />
      <UseArray /> */}
      <UsePrevious />
      {/* <UseStateWithHistory />
      <UseStorage />
      <UseAsync />
      <UseFetch />
      <UseScript />
      <UseEventListener />
      <UseOnScreen />
      <UseWindowSize />
      <UseDeepComapareeffect/>
      <UseMediaQuery/>
      <UseGeolocation/> */}
      {/* <UseSize/> */}
      {/* <UseEffectOnce/>
      <UseClickOutside/>
      <UseDarkMode/> */}
      {/* <UseCopyToClipBoard/> */}
      {/* <UseCookie/> */}
      {/* <UseTranslation/> */}
      <UseOnlineStatus/>
      <UseRenderCount/>
      <UseDebugInformation/>
    </div>
  );
}

export default App;
