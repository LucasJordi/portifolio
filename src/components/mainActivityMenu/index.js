
import "./style.css"
import {ReactComponent as CameraIcon} from '../../assets/icon/camera-outline.svg'
import {ReactComponent as SettingsIcon} from '../../assets/icon/settings.svg'
import {ReactComponent as LockIcon} from '../../assets/icon/lock-closed.svg'
import {ReactComponent as PowerIcon} from '../../assets/icon/power.svg'
import { useContext, useEffect, useState } from "react"
import { Properties } from "../properties"
import { MainContext } from "../../context/mainContext"

export const MainActivity=(props)=>{
    const {setInfoOpen,setInfonItem}=useContext(MainContext)

    const [sobre,setSobre]=useState({
        name:"Sobre",            
        desc:"Bem vindo ao meu portifólio! \n Esse portifólio foi feito tomando como base  meu desktop e como uma forma de me divertir usando o ReactJs e outras ferramentas como Html, Css e Javascript. \n foi feito com bastante carinho.",
        id:"1",
        icon:"",
        made:"ReactJs",
        link:window.location.host 
    })
    


    return(
        <>
        
        <div className="mainActivityMenu">
            <div className="menuItemActivityMenu menuItemActivityMenuBorder">
                <div className="menuItemActivityMenuItem" onClick={()=>{
                    setInfoOpen(true)
                    setInfonItem(sobre)
                }}>
                    <p className="textActivityMenu">Sobre meu sistema</p>


                </div>
            </div>
            <div className="menuItemActivityMenu menuItemActivityMenuBorder">
                <div className="menuItemActivityMenuItem">
                    <p className="textActivityMenu">Atividades</p>


                </div>
                <div className="menuItemActivityMenuItem">
                    <p className="textActivityMenu">Grid de aplicativos</p>


                </div>
            </div>
            <div className="menuItemActivityMenu menuItemActivityMenuBorder">
                <div className="menuItemActivityMenuItem">
                    <p className="textActivityMenu">Software center</p>


                </div>
                <div className="menuItemActivityMenuItem">
                    <p className="textActivityMenu">Terminal</p>


                </div>
            </div>
            <div className="menuItemActivityMenu">
                <div className="menuItemActivityMenuItem">
                    <p className="textActivityMenu">Forçar saída</p>


                </div>
            </div>
            
            

        </div>
        </>
    )

}