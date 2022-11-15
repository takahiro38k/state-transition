import "./components.css";
import { useState, memo, useCallback, useMemo } from "react";

const CountUpUseMemo = () => {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  // 💡💡 useCallback
  const onClickChildCount = useCallback(() => {
    setChildCount((prev) => prev + 1);
  }, []);

  const doubleCount = (count: number) => {
    console.log("doubleCount");
    return count * 2;
  };

  const doubledCount = () => doubleCount(count);
  // 💡💡 useMemo
  // const doubledCount = useMemo(() => doubleCount(count), [count]);

  console.log("CountUp");

  return (
    <div className="count-up-useMemo">
      <h2>count up</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>count up!</button>
      <p>{count}</p>
      <p>×2 = {doubledCount()}</p>
      {/* 💡💡 useMemo */}
      {/* <p>{doubledCount}</p> */}

      <CountUpChild onClick={onClickChildCount} />
      <p>{childCount}</p>
    </div>
  );
};

// 💡💡 memo
const CountUpChild = memo(({ onClick }: { onClick: () => void }) => {
  console.log("CountUpChild");

  return (
    <div className="count-up-useMemo-child">
      <h2>count up child</h2>
      <button onClick={onClick}>child count up!</button>
    </div>
  );
});

export default CountUpUseMemo;
