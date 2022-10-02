import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Banner></Banner>
        <p className="text-center">
          <button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;
