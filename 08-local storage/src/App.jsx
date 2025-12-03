

const App = () => {


    const user ={
        username:'aditya',
        age:20,
        city:'warisaliganj'
    }
   localStorage.setItem('user',JSON.stringify(user));

    const addii = localStorage.getItem('pissu');
    console.log(addii);
    
    localStorage.removeItem('pissu')

  return (
    <div>
      app
    </div>
  )
}

export default App
