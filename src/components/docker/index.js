
import "./style.css"
import {ReactComponent as BulbIcon} from '../../assets/icon/bulb-outline.svg'
import {ReactComponent as AppsIcon} from '../../assets/icon/apps.svg'
import { useContext, useState } from "react"
import pipMusicIcon from "../../assets/apps/pipMusic.png"
import jupiterlnIcon from "../../assets/apps/jupiterln.png"
import calculadoraIcon from "../../assets/apps/calculadoraNutri.png"
import preTaxaIcon from "../../assets/apps/pretaxa.png"
import appsIconPng from "../../assets/apps/apps.png"
import gitIcon from "../../assets/apps/git.png"
import terminalIcon from "../../assets/apps/utilities-terminal.png"
import breveIcon from "../../assets/apps/breve.png"

import { Properties } from "../properties"
import { MainContext } from "../../context/mainContext"

export const Docker=(props)=>{
    const [properties,setProperties]=useState(false)
    const [item,setItem]=useState(null)
    const {setInfoOpen,setInfonItem,terminalOpen,setTerminalOpen}=useContext(MainContext)

    const [apps,setApps]=useState([
        {
            name:"Pip Music",            
            desc:"PipMusic é um player de musica que se integra com Google Drive. Com ele é possível se comunicar com musicas em uma pasta compartilhada no drive.",
            id:"1",
            icon:pipMusicIcon,
            made:"React Native",
            link:"https://github.com/LucasJordi/pipMusic"
        },
        {
            name:"Jupiter Light novel",
            desc:"JupiterLn é um leitor de light novels em português para android, gratuito e de código aberto. Baseado nos famosos LNReader e Tachiyomi. Desenvolvido em Ionic/Angular",
            id:"2",
            icon:jupiterlnIcon,
            made:"Ionic Angular",
            link:"https://github.com/LucasJordi/jupiterln"
        },
        {
            name:"Preço com taxa",
            desc:"Gerencie seus gastos com taxas de aplicativos e saiba o quanto deve cobrar para ter lucro.",
            id:"3",
            icon:preTaxaIcon,
            made:"React Native",
            link:"https://play.google.com/store/apps/details?id=com.nutriinterativa.pretaxa"
        },
        {
            name:"Calculadora Nutrição Interativa",
            desc:"Faça calculos de IMC, gasto energético, fator de correção, divisão de macronutrientes, tabela TACO e muitro mais na palma da sua mão de forma simples e intuitiva.",
            id:"4",
            icon:calculadoraIcon,
            made:"React Native",
            link:"https://play.google.com/store/apps/details?id=com.nutriinterativa.calculadora"
        },
        {
            name:"Manual de utilização MindSphere Cloud Foundry",
            desc:"Manual de utilização da plataforma Mindsphere em conjunto com o CloudFoundry",
            id:"5",
            icon:gitIcon,
            made:"Spring Boot",
            link:"https://github.com/LucasJordi/ManualCloudFoundryMindSphere"
        },
        {
            name:"ScrapNovel to Epub",
            desc:"Scrap de novels em sites e transformando obra em formato Epub",
            id:"6",
            icon:"",
            made:"Python",
            link:"https://github.com/LucasJordi/ScrapNoveltoEpub"
        },
        {
            name:"Scrap de Novels para documentos",
            desc:"Esse código possibilita capturar todos os capítulos de uma novel pré-definida e transformar em documentos separados ( Ainda apenas em txt).",
            id:"7",
            icon:"",
            made:"Python",
            link:"https://github.com/LucasJordi/NovelToDocument"
        },
        {
            name:"apiNovelFull",
            desc:"Api feita em Flask para pegar novels do site NovelFull",
            id:"8",
            icon:"",
            made:"Python Flask",
            link:"https://github.com/LucasJordi/apiNovel"
        },
        {
            name:"SpringOCPP",
            desc:"Teste de servidor OCPP para integração com estações de carregamento de veículos elétricos",
            id:"9",
            icon:"",
            made:"Spring Boot",
            link:"https://github.com/LucasJordi/SpringOcppTeste"
        },
        {
            name:"Em breve",
            desc:"10",
            id:"",
            icon:""
        },
        {
            name:"Em breve",
            desc:"11",
            id:"",
            icon:""
        },
        {
            name:"Em breve",
            desc:"12",
            id:"",
            icon:""
        },
        {
            name:"Em breve",
            desc:"13",
            id:"",
            icon:""
        },
        {
            name:"Em breve",
            desc:"14",
            id:"",
            icon:""
        },
        {
            name:"Terminal",
            desc:"Terminal de comandos",
            id:"terminal",
            icon:terminalIcon
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
            <div className="mainDocker">
                {
                    apps.map((element,index)=>(
                        <div key={element.desc+index} className="divDockerApp" data-name={element.name} onClick={()=>{
                            
                            if(element.id==="all"){
                                return false
                            }
                            if(element.id==="terminal"){
                                setTerminalOpen(false)
                                setTimeout(()=>{
                                    setTerminalOpen(true)
                                },100)
                                return true
                            }
                            if(element.id===""){
                                return false
                            }
                            setInfoOpen(false)
                            setInfonItem(element)
                            setTimeout(()=>{
                                setInfoOpen(true)
                            },100)
                        }}>
                            {/* <AppsIcon className="iconDocker" /> */}

                            <img src={element.icon!=""? element.icon: element.id!=""? gitIcon:breveIcon} className="iconDocker" />

                        </div>

                    ))
                }
                
                
                


            </div>
        </>
    )

}