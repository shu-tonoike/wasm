import {  useState } from "react";
import { ColorButton } from "./ColorButton";
import { InputLimit } from "./InputLimit";
import { CalOnMainThread } from "./CalOnMainThread";
import { CalOnWorker } from "./CalOnWorker";
import { CalOnWasmBuiltRust } from "./CalOnWasmBuiltRust";
function App() {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(35000000);
  const [proccessing, setProccessing] = useState(false);


  return (
    <>
      <InputLimit setLimit={setLimit} limit={limit} />
      までの
      <br />
      <CalOnMainThread setCount={setCount} setIsProccesing={setProccessing} limit={limit} />
      <br />
      <CalOnWorker setCount={setCount} setIsProccesing={setProccessing} limit={limit} />
      <br />
      <CalOnWasmBuiltRust setCount={setCount} setIsProccesing={setProccessing} limit={limit} />
      <br />
      {count}個 <br></br>
      {proccessing ? "計算中..." : null}
      <br></br>
      <ColorButton />
    </>
  );
}

export default App;
