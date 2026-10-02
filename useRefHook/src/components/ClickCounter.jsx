import { useRef } from "react";

const ClickCounter = () => {
  const count = useRef(0);
  function handleClick() {
    count.current++;
    console.log(count.current);
  }

  return (
    <div>
      <p>{count.current}</p>{" "}
      {/* As changing ref doesnt re-render, UI doesnt update(i.e count.current will alsways show 0) but value is incrementing on btn click which we can check using clg above*/}
      <button onClick={handleClick}>Counter</button>
    </div>
  );
};

export default ClickCounter;

// If the value needs to appear/update in the UI → use state.

// If you just need to remember something → use ref.

// Now suppose something else causes the component to re-render.

// Render #1
//   ↓
// clickCount.current = 3
//   ↓
// Something causes re-render
//   ↓
// Render #2
//   ↓
// clickCount.current is STILL 3

// With Normal Variable:

// function Counter() {
//   let clickCount = 0;

//   const handleClick = () => {
//     clickCount++;
//     console.log(clickCount);
//   };

//   return <button onClick={handleClick}>Click</button>;
// }

// The problem is that every render does:

// Counter()
//    ↓
// let clickCount = 0    ← created again

// So normal variables don't persist between renders.
