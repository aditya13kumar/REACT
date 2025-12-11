import { createContext } from "react"


export const themeData=createContext()
const themecontext = (props) => {
  return (
    <div>
      <themeData.Provider  value={'Aditya'}>
        {props.children}
      </themeData.Provider>
    </div>
  )
}

export default themecontext
