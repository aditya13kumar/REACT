import { useState } from "react";

const App = () => {

  const [name, setname] = useState('')

  const [passward, setpassward] = useState('')

    const submithandler=(elem)=>{
        elem.preventDefault()
        console.log('form submit by' , name);
        console.log('passward submite',passward)

        setname('')
        setpassward('')
    }
  return (
    <div className="div">
       <form onSubmit={(e)=>{submithandler(e)}}>
        <input type="text"placeholder="username.."value={name}onChange={(e)=>{setname(e.target.value)}}></input>

        <input type="text" placeholder="passward.."value={passward}onChange={(e)=>{setpassward(e.target.value);}}></input>

        <button>submit</button>
       </form>
    </div>
  )
}

export default App
