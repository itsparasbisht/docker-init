import { useState } from "react";
import "./App.css";
const envs = import.meta.env;

function App() {
  const [count, setCount] = useState();
  return (
    <div>
      <h1>Vite app + Docker</h1>
      <h2>{envs.VITE_APP_DUMMY_KEY}</h2>
    </div>
  );
}

export default App;
