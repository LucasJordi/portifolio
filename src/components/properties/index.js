
import "./style.css"
import {ReactComponent as CloseIcon} from '../../assets/icon/close.svg'
import pipMusicIcon from "../../assets/apps/pipMusic.png"
import { useEffect, useState } from "react"
import gitIcon from "../../assets/apps/git.png"
export const Properties=(props)=>{
    const [desc,setDesc]=useState({id:"",desc:""})
    useEffect(()=>{
        const jsonDesc=require("../../utilities/appsDesc.json")
        const parsed=JSON.parse(JSON.stringify(jsonDesc))
        console.log(props.item.id)
        const finded=parsed.find(x=>x.id===props.item.id)

        setDesc(finded)
        console.log(finded)

    },[])
    let mouseUp=false
    let mouseUpTarget=null
    let offset = [0,0];
    let offsetM = [0,0];
    let offLeft=0
    let offTop=0

    useEffect(()=>{
        window.addEventListener("mousedown",(event)=>{
            mouseUp=true
            mouseUpTarget=event.target.className
            const elementPage=document.querySelector(".mainProps")
            offsetM = [
                event.clientX-elementPage.offsetLeft,
                event.clientY-elementPage.offsetTop,
            ];
            offTop=elementPage.offsetTop
            offLeft=elementPage.offsetLeft
        })
        window.addEventListener("mouseup",()=>{
            mouseUp=false
            mouseUpTarget=null
            offsetM=[0,0]
            // offset=[0,0]

            
           

        })
        window.addEventListener("mousemove",(event)=>{
            if(mouseUpTarget==="propsBar"){
                const elementPage=document.querySelector(".mainProps")                
                let left=elementPage.style.left
                let top=elementPage.style.top                
                const x=event.clientX
                const y=event.clientY                
                const tt=event.clientX-offsetM[0]-offLeft
                elementPage.style.left=(event.clientX-offsetM[0]-offLeft)+"px"
                elementPage.style.top=(event.clientY-offsetM[1]-offTop)+"px"
                
            }
        })

    },[])



    return(
        <div className="mainProps">
            <div className="propsBar">
                <p className="textPropsBar">Propriedades</p>
                <div className="propsBtnClose" onClick={()=>{
                    props.setOpen(false)
                }}>
                    <CloseIcon />

                </div>

            </div>
            <div className="propsContent">
                <div className="propsContentTop">
                    <img src={props.item.icon!=""?props.item.icon:gitIcon} className="propsIconApp" />
                    <h1 className="propsTextTitle">
                        {props.item.name}
                    </h1>
                    <p>
                        Feito em {props.item.made}
                    </p>

                </div>
                <div className="propsContentBottom">
                    <div className="cardProps" onClick={()=>{
                        window.open(props.item.link)
                    }}>
                        <p  className="pProps pPropstext1">
                            Link
                        </p>
                        <p className="pProps">
                            {props.item.link.slice(0,40)}...
                        </p>

                    </div>

                    <div className="cardProps2" >
                        <p  className="pProps pPropstext1">
                            Descrição
                        </p>
                        <p className="pProps">
                            {props.item.desc}
                        </p>

                    </div>
                    
                    
                    

                </div>
                
            </div>
            

        </div>
    )

}