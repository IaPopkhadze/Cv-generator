import StartPage from "./components/StartPage/StartPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="layout" element={<Layout/>}/>
      </Routes>
    </div>
  );
}

export default App;
