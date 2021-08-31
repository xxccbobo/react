import { createContext, useReducer } from "react"

export const ColorContext =createContext({})
    

export const Color = props => {

    const reducer = (state,action)=>{
        switch(action.id){
            case '1' :
                return action.color
            default:
                return state
        }
    }

    const [color,dispatch] = useReducer(reducer,"green")

    return (
        <ColorContext.Provider value={{color,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )

}