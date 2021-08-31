import { useContext } from "react"
import { ColorContext } from "./Color"

export default ()=>{
    const {color} = useContext(ColorContext)
    return (
        <div>
            <h1 style={{color:color}}>字体的颜色为：{color}</h1>
        </div>
    )
}