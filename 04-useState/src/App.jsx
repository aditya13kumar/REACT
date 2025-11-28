import { useState } from "react"

const App = () => {

  const [a, setA] = useState(0);

   function changeA(){
     setA(a+1);
   }

   function changeB(){
     setA(a-1);
   }
   function jump(){
    setA(a+5);
   }

  return (
    <div>
      <h1>{a}</h1>
      <button onClick={changeA}>Increase</button>
      <button onClick={changeB}>Decrease</button>
      <button onClick={jump}>increase by 5</button>

    </div>
  )
}

export default App
