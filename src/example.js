import { useState } from "react"

export default () => {
    const [count,setCount] = useState(0);
    const item = "2";
    const array = ["1","2","3"]

    const methods = () => {
        return array.includes(item);
    }


    return (
        <div>
        {methods() ? (
        <div>
            <p>你点击了{count}次</p>
            <button  onClick={()=>{setCount(count+1)}}>+</button>
        </div>)
        :null
    }</div>
    )









}