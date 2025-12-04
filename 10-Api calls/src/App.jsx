import axios from "axios"
import { useState } from "react";

const App = () => {
  // const getdata =async()=>{
  //    const response=await fetch('https://jsonplaceholder.typicode.com/photos')
  //    const data = await response.json();
  //    console.log(data);
     
  // }

  const [data, setdata] = useState([])

  const getdata =async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    console.log(response.data);
    
    setdata(response.data);
    
  }

  return (
    <div>
     <button onClick={getdata}>Get Data</button>

     <div>
      {data.map(function(elem,idx){
        return <h1 className="pissu">pissu ,{idx} {elem.title}</h1>
      })}
     </div>
    </div>
  )
}

export default App
