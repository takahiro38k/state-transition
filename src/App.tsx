import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CountUpMemo from "./components/CountUpMemo";
import CountUpUseCallback from "./components/CountUpUseCallback";
import CountUpUseMemo from "./components/CountUpUseMemo";

const paths = {
  basic: "/",
  next: "/next",
  next2: "/next2",
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
                <Link to={paths.basic}>basic</Link>
              </li>
              <li>
                <Link to={paths.next}>next</Link>
              </li>
              <li>
                <Link to={paths.next2}>next2</Link>
              </li>
            </ul>
          </nav>

          <h2>App</h2>

          <Routes>
            <Route path={paths.basic} element={<CountUpMemo />} />
            <Route path={paths.next} element={<CountUpUseCallback />} />
            <Route path={paths.next2} element={<CountUpUseMemo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
