import React from 'react'

const App = () => {
    function btnclicked(){
       console.log("btn clicked!!");
    }

    function mouseEntr(){
        console.log('Enter!!');
    }

    function inputchnge(elem){
        console.log(elem.target.value);
    }
  return (
    <div>
      <h1>hello guys!!</h1>


      <button onClick={btnclicked}

       onDoubleClick={function dblclick()
        {console.log('double clicked!!')}}

       onMouseEnter={mouseEntr}>Click me</button>

       <button onClick={btnclicked}>explore this!!</button>


      <input onChange={inputchnge} type="text" placeholder='Enter.....'/>
    </div>
  )
}

export default App
