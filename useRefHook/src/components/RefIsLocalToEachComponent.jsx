import { useRef } from "react";

let count = 0;
const RefIsLocalToEachComponent = ({ name }) => {
  //   const count = useRef(0);

  return (
    <div>
      <button
        onClick={() => {
          //   count.current++;
          count++;
          //   console.log(name + ":", count.current);
          console.log(name + ":", count);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default RefIsLocalToEachComponent;

// We have two copies of Counter.

// React creates separate ref objects:

//              App
//               │
//        ┌──────┴──────┐
//        ↓             ↓
//     Counter        Counter
//        │             │
//     ref A          ref B
//        │             │
//  current = 0     current = 0

// Click the first button 3 times:

// ref A.current = 3
// ref B.current = 0

// Click the second button once:

// ref A.current = 3
// ref B.current = 1

// They don't interfere with each other.
