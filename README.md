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

- 페이지별 desktop, tablet, mobile 디자인 스크린샷

  <img src="https://user-images.githubusercontent.com/94341508/196621956-588b2914-8551-4b82-a8b8-2ceda69d1537.png" alt="home" width="48%" />
  <img src="https://user-images.githubusercontent.com/94341508/196621990-99dd2b4c-f538-4ec7-a465-25d2607f5b04.png" alt="destination" width="48%" />

<img src="https://user-images.githubusercontent.com/94341508/196622016-1a5cf4a0-b320-4d60-bf0b-5239ffec2da3.png" alt="crew" width="48%" /><img src="https://user-images.githubusercontent.com/94341508/196622032-8a4c0d67-650e-4a7d-b9cd-7f4a820ffe23.png" alt="technology" width="48%" />

### Links

- Go to Repository: [Github Repository](https://github.com/sagekim6/Space-tourism.git)
- Live Site URL: [https://sagekim6.github.io/space-tourism/](https://sagekim6.github.io/space-tourism/)

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

**1-1.** App 컴포넌트에서 URL 경로를 지정하였습니다.

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

**1-2.** Header.js에서 `Link` 컴포넌트를 사용해 클릭 시 해당 페이지로 이동합니다.

```javascript
import { Link } from "react-router-dom";

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

#### 3. 높은 접근성

**3-1.** `sr-only` 사용

부트스트랩의 `sr-only`클래스를 믹스인으로 정의하여 웹 접근성을 높였습니다.

```css
// screen reader only
@mixin sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  border: 0;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}
```

**3-2.** `WAI-ARIA` 사용

어떤 버튼이 클릭 되었는지 알려주기 위해 `aria-selected` 속성을 추가하였습니다. `handleSelected` 함수로 클릭 된 버튼에만 속성값이 `true`로 변경되고 나머지는 `false`가 됩니다.

```javascript
<div role={"tablist"} onClick={handleSelected} className="Destination-list">
  <button role="tab" aria-selected="true" data-planet="Moon">
    <span>Moon</span>
    Moon
  </button>
  <button role="tab" aria-selected="false" data-planet="Mars">
    <span>Mars</span>
    Mars
  </button>
  <button role="tab" aria-selected="false" data-planet="Europa">
    <span>Europa</span>
    Europa
  </button>
  <button role="tab" aria-selected="false" data-planet="Titan">
    <span>Titan</span>
    Titan
  </button>
</div>
```

### What I learned

#### 1. `<picture>` 태그

Technology 컴포넌트에서 mobile과 tablet 크기에서 사용되는 이미지와 desktop에서 사용되는 이미지가 달랐습니다.  
어떻게 하면 이 부분을 구현할 수 있을까 고민하면서 여러 가지를 검색하다가 `<picture>` 태그를 발견하였습니다. 처음 보는 태그였고 이름에서 이미지와 관련된 태그이지 않을까 유추하였습니다. 알아보니 현재 상황과 잘 맞는 태그인 것 같아 시도해보니 원하는 데로 잘 동작하였습니다.

디스플레이 크기가 45em 이상이면 `<source>` 요소의 이미지가 나오고 아니라면 `<img>` 요소의 이미지가 나오게 됩니다.

```javascript
<picture>
  <source srcset="{changeTechImage()[1]}" media="(min-width: 45em)" />
  <img src="{changeTechImage()[0]}" alt="{currentStep[0].name}" />
</picture>
```

### 개선사항

1. 배경 이미지가 렌더링 되는 속도 향상하기
