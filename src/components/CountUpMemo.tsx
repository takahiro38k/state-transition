import "./components.css";
import { useState, memo } from "react";

const CountUpMemo = () => {
  const [count, setCount] = useState(0);

  console.log("CountUp");

  return (
    <div className="count-up-memo">
      <h2>count up</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>count up!</button>
      <p>{count}</p>

      <CountUpChild />
    </div>
  );
};

const CountUpChild = () => {
  console.log("CountUpChild");

  return <h2 className="count-up-memo-child">count up child</h2>;
};
// 💡💡 memo
// const CountUpChild = memo(() => {
//   console.log("CountUpChild");

//   return <h2 className="count-up-memo-child">count up child</h2>;
// });

export default CountUpMemo;
