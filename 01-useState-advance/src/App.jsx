import React, { useState } from 'react'

// const App = () => {

//   const [num,Setnum] = useState({user:'aditya',age:20,sem:'3rd'})

//   const update =()=>{
//     const Newnum = {...num};
//     Newnum.user='pissu'
//     Newnum.age=22
//     Newnum.sem= '1st'

//     Setnum(Newnum);
//   }
//   return (
//     <div>
//       <h1>{num.user} ,age={num.age} , sem={num.sem}</h1>

//       <button onClick={update}>Click</button>
//     </div>
//   )
// }

// export default App




const App = () => {

  const [num, setnum] = useState([10,20,30,40])

  const update=()=>{
    const newnum =[...num]

    newnum.push(99);
    
    setnum(newnum)
  }
  return (
    <div>
        <h1>{num + (',')}</h1>
        <button onClick={update}>click</button>
    </div>
  )
}

export default App

