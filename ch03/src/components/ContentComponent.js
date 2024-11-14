// 중괄호 제거 시 에러
// 일반 props 하고 다름
// child 라고 하면 안됨 (매개변수라고 해서 아무렇게나 작성하는 경향이 있는데 무조건 children이라고 작성해줘야 함)

/*
    children
    - 부모 컴포넌트가 자식 컴포넌트 사이에 포함된 내용을 전달하는 특별한 props
    

*/
const ContentComponent = ({ children }) => {
  return (
    <div className="ContentComponent">
      <h4>ContentComponent</h4>
      {children}
    </div>
  );
};

export default ContentComponent;
