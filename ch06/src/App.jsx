import "./App.css";
import ContextParent from "./components/ContextParent";
import ContextUserList from "./components/ContextUserList";
import ContextUserRegister from "./components/ContextUserRegister";
/*
  날짜 : 2024/11/14
  이름 : 김민희
  내용 : ch06.리액트 상태 관리 실습
*/
function App() {
  return (
    <div>
      <h3>ch06.리액트 상태 관리</h3>
      <h4>Context API 실습</h4>
      <ContextParent />
      <ContextUserRegister />
      <ContextUserList />

      <h4>Redux 실습</h4>
    </div>
  );
}

export default App;
