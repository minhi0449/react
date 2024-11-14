import "./App.css";
import UseReducerComponent from "./components/UseReducerComponent";
import UseRefComponent from "./components/UseRefComponent";
import UseStateComponent from "./components/useStateComponent";

function App() {
  return (
    <>
      <h3>ch04. react hooks</h3>

      <h4>useRef()</h4>
      <UseRefComponent />

      <h4>useState()</h4>
      <UseStateComponent />

      <h4>useReducer()</h4>
      <UseReducerComponent />

      <h4>useCallback()</h4>
      {/* <UseRefComponent /> */}

      <h4>useEffect()</h4>
      {/* <UseRefComponent /> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
