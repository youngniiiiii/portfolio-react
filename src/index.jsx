import App from "@/App"
import "@/css/main.css"
import "@/css/tailwind.css"

// ReactDOM의 createRoot 함수를 임포트합니다.
import { createRoot } from "react-dom/client"

// 페이지의 root 요소를 찾아서 React 애플리케이션을 마운트합니다.
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
