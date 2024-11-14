import { useContext } from "react";
import ContextChild from "./ContextChild";
import CountContext from "../context/CountContext";

export default function ContextParent() {
  // ContextParent가 children 이 되는 거임
  const { count, increase, decrese, reset } = useContext(CountContext);

  return (
    <div className="ContextParent">
      <h5>ContextParent</h5>

      <p>ContextParent count : {count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrese}>감소</button>
      <button onClick={() => reset(0)}>리셋</button>

      <ContextChild />
    </div>
  );
}
