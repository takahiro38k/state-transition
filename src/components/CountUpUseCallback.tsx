import "./components.css";
import { useState, memo, useCallback } from "react";

const CountUpUseCallback = () => {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const onClickChildCount = () => {
    setChildCount((prev) => prev + 1);
  };
  // 💡💡 useCallback
  // const onClickChildCount = useCallback(() => {
  //   setChildCount((prev) => prev + 1);
  // }, []);

  console.log("CountUp");

  return (
    <div className="count-up-useCallback">
      <h2>count up</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>count up!</button>
      <p>{count}</p>

      <CountUpChild onClick={onClickChildCount} />
      <p>{childCount}</p>
    </div>
  );
};

// 💡💡 memo
const CountUpChild = memo(({ onClick }: { onClick: () => void }) => {
  console.log("CountUpChild");

  return (
    <div className="count-up-useCallback-child">
      <h2>count up child</h2>
      <button onClick={onClick}>child count up!</button>
    </div>
  );
});

export default CountUpUseCallback;
