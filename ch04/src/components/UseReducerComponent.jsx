import { useReducer } from "react";

// 상태 선언
const initCountState = {
  count: 0,
};

// 리듀서 (상태값을 처리하는 함수) 정의
function countReducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
  }
}

// 초기 상태 선언
const initUserState = {
  uid: "",
  name: "",
  age: 0,
};

// 리듀서 정의
function userReducer(state, action) {
  console.log("action.name" + action.name);
  console.log("action.value" + action.value);

  // 위에 const user 가 위에 초기 상태선언한 initUserState 임
  /*
  const user = { ...state };
  if (action.user === "uid") {
    user.uid = action.value;
  }

  if (action.user === "name") {
    user.name = action.value;
  }

  if (action.user === "age") {
    user.age = action.value;
  }

  return user;
  */

  // 어떻게 리턴 되냐?
  // 하드 코딩 하면 고정됨
  //   return {
  //     uid: "a101",
  //     name: "홍길동",
  //     age: 23,
  //   };
  //return true;

  //return state; // 이제 state 로 고정됨
  return { ...state, [action.name]: action.value };
}

export default function UseReducerComponent() {
  // useReduce(), 사용자 정의  state 와  state처리함수를 정의하는 react hook
  // 복잡하게 처리하는
  // countDispatch 일반적으로 이름 사용
  const [countState, countDispatch] = useReducer(countReducer, initCountState); // 1: 리듀서, 2: 초기상태
  const [userState, userDispatch] = useReducer(userReducer, initUserState);

  return (
    <div className="UseReducerComponent">
      <h4>UseReducerComponent</h4>
      <p>count : {countState.count}</p>
      <button
        onClick={() => {
          countDispatch({ type: "INCREASE" });
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          countDispatch({ type: "DECREASE" });
        }}
      >
        감소
      </button>
      <button
        onClick={() => {
          countDispatch({ type: "RESET" });
        }}
      >
        리셋
      </button>

      <p>
        아이디: {userState.uid} <br />
        이름 : {userState.name} <br />
        나이 : {userState.age}
        <br />
      </p>
      <input
        type="text"
        name="uid"
        value={userState.uid}
        onChange={(e) => userDispatch(e.target)}
      />
      <br />
      <input
        type="text"
        name="name"
        value={userState.name}
        onChange={(e) => userDispatch(e.target)}
      />
      <br />
      <input
        type="text"
        name="age"
        value={userState.age}
        onChange={(e) => userDispatch(e.target)}
      />
      <br />
    </div>
  );
}
