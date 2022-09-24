import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";

import "./style/app.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/" element={<Destination />} />
          <Route path="/crew/" element={<Crew />} />
          <Route path="/technology/" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/*

목표 : 페이지별로 background image 다르게 표시하기

시도1

1. App 컴포넌트를 

*/
