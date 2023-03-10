import { createContext, useEffect, useState } from "react";


export const MainContext=createContext()



export const MainContextProvider=({children})=>{
    const [infoOpen,setInfoOpen]=useState(false)
    const [splash,setSplash]=useState(true)
    const [terminalOpen,setTerminalOpen]=useState(false)
    const [infoItem,setInfonItem]=useState({
        name:"",            
        desc:"",
        id:"",
        icon:"",
        made:"",
        link:window.location.host 
    })
    useEffect(()=>{

    },[])

    
    




    return(
        <MainContext.Provider value={{terminalOpen,setTerminalOpen,infoOpen,setInfoOpen,infoItem,setInfonItem,splash,setSplash}}>
            {children}
        </MainContext.Provider>
    )

}