


const App = () => {

    const submithandler=(elem)=>{
        elem.preventDefault()
        console.log('form submit');
    }
  return (
    <div className="div">
       <form onSubmit={(e)=>{
        submithandler(e)
       }}>
        <input type="text" placeholder="username.."></input>
        <input type="text" placeholder="passward.."></input>
        <button>submit</button>
       </form>
    </div>
  )
}

export default App
