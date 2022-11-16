import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CountUp from "./components/CountUp";
import CountUpMemo from "./components/CountUpMemo";
import CountUpUseCallback from "./components/CountUpUseCallback";
import CountUpUseMemo from "./components/CountUpUseMemo";

const paths = {
  useState: "/",
  memo: "/memo",
  useCallback: "/useCallback",
  useMemo: "/useMemo",
};

function App() {
  console.log("App");

  return (
    <Router>
      <div className="container">
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to={paths.useState}>useState</Link>
              </li>
              <li>
                <Link to={paths.memo}>memo</Link>
              </li>
              <li>
                <Link to={paths.useCallback}>useCallback</Link>
              </li>
              <li>
                <Link to={paths.useMemo}>useMemo</Link>
              </li>
            </ul>
          </nav>

          <h2>App</h2>

          <Routes>
            <Route path={paths.useState} element={<CountUp />} />
            <Route path={paths.memo} element={<CountUpMemo />} />
            <Route path={paths.useCallback} element={<CountUpUseCallback />} />
            <Route path={paths.useMemo} element={<CountUpUseMemo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
