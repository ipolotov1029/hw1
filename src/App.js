import { useState } from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";

function App() {
const [count, setCount] = useState(0);

const countIncrement = () => {
  if(count < 15) setCount(count + 5)
}

const countDecrement = () => {
 if(count > 0) setCount(count - 5)
}
  return (
    <div>
     <h3>{count}</h3>
     <Increment countIncrement={countIncrement}/>
     <Decrement countDecrement={countDecrement}/>
    </div>
  );
}

export default App;
