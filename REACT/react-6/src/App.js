import React from "react";
// import ReactMemo from './components/React.memo & useMemo/ReactMemo';
// import UseMemo from './components/React.memo & useMemo/UseMemo';

// import UseRefComp from "./components/Refs & useRefs/UseRefComp";
// import UseRefComp2 from "./components/Refs & useRefs/UseRefComp2";

import UseCallbackComp from "./components/useCallback/UseCallbackComp";

function App() {
  return (
    <div className="App">
      {/* <h1>React.memo</h1>
      <ReactMemo />
      <hr />
      <hr />
      <hr />
      <hr />
      <h1>React.useMemo</h1>
      <UseMemo /> */}

      {/* <h1>useRef Hook</h1>
      <UseRefComp />
      <UseRefComp2 /> */}

      <h1>useCallback Hook</h1>
      <UseCallbackComp />

    </div>
  );
}

export default App;
