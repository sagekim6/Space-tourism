# Space tourism website

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [개발목표](#개발목표)
  - [Built with](#built-with)
  - [Advanced feature](#Advanced-feature)
  - [What I learned](#what-i-learned)
  - [개선사항](#개선사항)

## Overview

### Screenshot

- 각 페이지별 desktop, tablet, mobile 디자인 스크린샷

  <img src="https://user-images.githubusercontent.com/94341508/196621956-588b2914-8551-4b82-a8b8-2ceda69d1537.png" alt="home" width="48%" />
  <img src="https://user-images.githubusercontent.com/94341508/196621990-99dd2b4c-f538-4ec7-a465-25d2607f5b04.png" alt="destination" width="48%" />

<img src="https://user-images.githubusercontent.com/94341508/196622016-1a5cf4a0-b320-4d60-bf0b-5239ffec2da3.png" alt="crew" width="48%" /><img src="https://user-images.githubusercontent.com/94341508/196622032-8a4c0d67-650e-4a7d-b9cd-7f4a820ffe23.png" alt="technology" width="48%" />

### Links

- Go to Repository: [Github Repository](https://github.com/sagekim6/Space-tourism.git)
- Live Site URL: [url]()

## My process

### 개발목표

- 리액트 라우터를 이용한 페이지 이동 구현
- aria 속성과 tab을 이용한 높은 접근성
- 모바일 퍼스트 디자인과 반응형 웹 디자인 구현

### Built with

- Semantic HTML5 markup
- Scss
- Styled-component
- Flexbox
- Grid
- Media query
- [React](https://reactjs.org/)

### Advanced feature

#### 1. React-router를 사용한 페이지 이동

![router](https://user-images.githubusercontent.com/94341508/196963300-87d89558-312b-40a5-9333-165fa86bfbc3.gif)

1. App 컴포넌트에서 url 경로 지정

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/app.scss";
import data from "./data.json";
// Pages
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";

function App() {
  return (
    <>
      <a href="#content" className="skip-to-content">
        skip to content
      </a>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations/" element={<Destination data={data} />} />
          <Route path="/crews/" element={<Crew data={data} />} />
          <Route path="/technologies/" element={<Technology data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
```

2. Header.js 컴포넌트에서 `Link` 컴포넌트를 사용해 클릭시 해당 페이지로 이동

```javascript
const Header = () => {
  // other code...

  return (
    <header className="Header">
      {/*
        ...other code... 
       */}
      <nav>
        <ul id="Primary-nav" className="Primary-nav" data-visible="false">
          <li>
            <Link to="/">
              <span aria-hidden="true">00</span>HOME
            </Link>
          </li>
          <li>
            <Link to="/destinations/">
              <span aria-hidden="true">01</span>DESTINATION
            </Link>
          </li>
          <li>
            <Link to="/crews/">
              <span aria-hidden="true">02</span>CREW
            </Link>
          </li>
          <li>
            <Link to="/technologies/">
              <span aria-hidden="true">03</span>TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default memo(Header);
```

#### 2. Skip-to-content 링크

- 키보드를 사용하는 사용자가 내비게이션을 스킵하고 바로 본문으로 건너뛸 수 있게 `Skip-to-content` 링크를 구현하여 좀 더 자유롭게 페이지를 돌아다닐 수 있도록 하였습니다.

![skip-to-content](https://user-images.githubusercontent.com/94341508/196963714-d7e263cc-7148-48c4-b0e1-2d17517d36aa.gif)

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/app.scss";
import data from "./data.json";
// Pages
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";

function App() {
  return (
    <>
      {/* 본문 바로 가기 */}
      <a href="#content" className="skip-to-content">
        skip to content
      </a>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations/" element={<Destination data={data} />} />
          <Route path="/crews/" element={<Crew data={data} />} />
          <Route path="/technologies/" element={<Technology data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
```

### What I learned

### 개선사항

1. 배경 이미지가 렌더링 되는 속도 향상하기
