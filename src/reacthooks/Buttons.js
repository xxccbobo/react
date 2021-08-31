import { useContext } from "react"
import { ColorContext } from "./Color"

export default ()=>{
    const {dispatch} = useContext(ColorContext)

    return (
        <div>
            <button onClick={()=>{dispatch({id:"1",color:"blue"})}}>变蓝</button>
            <button onClick={()=>{dispatch({id:"1",color:"red"})}}>变红</button>
        </div>
    )
}