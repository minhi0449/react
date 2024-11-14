import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CountProvider } from "./context/CountContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 여기는 앱이 시작하는 엔트리 포인트 */}
    {/* Context Provider로 감싸서 App 하위 모든 컴포넌트에 컨텍스트 제공 */}
    <CountProvider>
      <App />
    </CountProvider>
  </StrictMode>
);
