import "./components.css";
import { useState } from "react";

console.log("CountUp - outside");

const CountUp = () => {
  const [count, setCount] = useState(0);

  console.log("CountUp");

  return (
    <div className="count-up">
      <h2>count up</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>count up!</button>
      <p>{count}</p>
    </div>
  );
};

export default CountUp;
