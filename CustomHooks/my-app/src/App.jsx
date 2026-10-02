import { useState } from "react";
import GitHub from "./GitHub";
function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <h1>Hello, World!</h1>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setValue(e.target.value)}
      />
      {value ? (
        <GitHub username={value} />
      ) : (
        <p>Type something to see the result</p>
      )}
    </>
  );
}

export default App;
