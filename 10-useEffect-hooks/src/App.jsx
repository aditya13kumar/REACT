import { useEffect, useState } from "react";


const App = () => {

    const [a, setA] = useState(0)
    const [B, setB] = useState(0)

    function Achange(){
      console.log('achnage');
      
    }

    function Bchange(){
        console.log('bchnage');
    }

    useEffect(function(){
        Bchange()
        console.log('useeffec is running');
    },[B])
  return (
    <div>
       <h1>A = {a}</h1>
       <h1>B = {B}</h1>
      <button onClick={()=>{setA(a+1);}}>Change A</button>
      <button onClick={()=>{setB(B-1);}}>Change B</button>
    </div>
  )
}

export default App
