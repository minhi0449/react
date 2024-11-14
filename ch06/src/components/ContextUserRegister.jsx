import { useContext } from "react";
import CountContext from "../context/CountContext";

export default function ContextUserRegister() {
  const { count, increase, decrese, reset } = useContext(CountContext);

  return (
    <div className="ContextUserRegister">
      <h5>ContextUserRegister</h5>

      <form action="">
        <input type="text" name="uid" value={null} onChange={null} /><br />
        <input type="text" name="name" value={null} onChange={null} /><br />
        <input type="text" name="age" value={null} onChange={null} /><br />
        <input type="submit" name="" value={null} onChange={null} /><br />
      </form>

      <p>ContextChild count : {count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrese}>감소</button>
      <button onClick={() => reset(0)}>리셋</button>
    </div>
  );
}
