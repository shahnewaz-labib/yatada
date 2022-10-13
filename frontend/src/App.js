import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/taskboard" element={<TaskBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
