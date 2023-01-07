
import "./style.css"
import {ReactComponent as BulbIcon} from '../../assets/icon/bulb-outline.svg'
import {ReactComponent as AppsIcon} from '../../assets/icon/apps.svg'
import { useState } from "react"
import pipMusicIcon from "../../assets/apps/pipMusic.png"
import jupiterlnIcon from "../../assets/apps/jupiterln.png"
import calculadoraIcon from "../../assets/apps/calculadoraNutri.png"
import preTaxaIcon from "../../assets/apps/pretaxa.png"
import appsIconPng from "../../assets/apps/apps.png"
import { Properties } from "../properties"

export const Docker=(props)=>{
    const [properties,setProperties]=useState(false)
    const [item,setItem]=useState(null)

    const [apps,setApps]=useState([
        {
            name:"Pip Music",
            desc:"",
            id:"1",
            icon:pipMusicIcon,
            made:"React Native",
            link:"https://github.com/LucasJordi/pipMusic"
        },
        {
            name:"Jupiter Light novel",
            desc:"2",
            id:"2",
            icon:jupiterlnIcon,
            made:"Ionic Angular",
            link:"https://github.com/LucasJordi/jupiterln"
        },
        {
            name:"Preço com taxa",
            desc:"3",
            id:"3",
            icon:preTaxaIcon,
            made:"React Native",
            link:"https://play.google.com/store/apps/details?id=com.nutriinterativa.pretaxa"
        },
        {
            name:"Calculadora Nutrição Interativa",
            desc:"4",
            id:"4",
            icon:calculadoraIcon,
            made:"React Native",
            link:"https://play.google.com/store/apps/details?id=com.nutriinterativa.calculadora"
        },
        {
            name:"",
            desc:"",
            id:"",
            icon:""
        },
        {
            name:"",
            desc:"",
            id:"",
            icon:""
        },
        {
            name:"",
            desc:"",
            id:"",
            icon:""
        },
        {
            name:"",
            desc:"",
            id:"",
            icon:""
        },
        {
            name:"",
            desc:"",
            id:"",
            icon:""
        },
        {
            name:"",
            desc:"",
            id:"",
            icon:""
        },
        {
            name:"",
            desc:"",
            id:"",
            icon:""
        },
        {
            name:"",
            desc:"",
            id:"",
            icon:""
        },
        {
            name:"",
            desc:"",
            id:"",
            icon:""
        },
        {
            name:"",
            desc:"",
            id:"",
            icon:""
        },
        {
            name:"",
            desc:"",
            id:"",
            icon:""
        },
        {
            name:"Ver todos",
            desc:"All",
            id:"all",
            icon:appsIconPng
        },
        
        
        
    ])



    return(
        <>
            {properties&&<Properties setOpen={setProperties} item={item} />}
            <div className="mainDocker">
                {
                    apps.map(element=>(
                        <div className="divDockerApp" data-name={element.name} onClick={()=>{
                            if(element.id===""){
                                return false
                            }
                            setProperties(false)
                            setItem(element)
                            setTimeout(()=>{
                                setProperties(true)
                            },100)
                        }}>
                            {/* <AppsIcon className="iconDocker" /> */}

                            <img src={element.icon} className="iconDocker" />

                        </div>

                    ))
                }
                
                
                


            </div>
        </>
    )

}