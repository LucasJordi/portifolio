
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
    
    useEffect(()=>{        
        
       
        
        const dragElement = (element, dragzone) => {
            let pos1 = 0,
              pos2 = 0,
              pos3 = 0,
              pos4 = 0;
        //MouseUp occurs when the user releases the mouse button
            const dragMouseUp = () => {
              document.onmouseup = null;
        //onmousemove attribute fires when the pointer is moving while it is over an element.
              document.onmousemove = null;
        
              element.classList.remove("drag");
            };
        
            const dragMouseMove = (event) => {
        
              event.preventDefault();
        //clientX property returns the horizontal coordinate of the mouse pointer
              pos1 = pos3 - event.clientX;
        //clientY property returns the vertical coordinate of the mouse pointer
              pos2 = pos4 - event.clientY;
              pos3 = event.clientX;
              pos4 = event.clientY;
        //offsetTop property returns the top position relative to the parent
              element.style.top = `${element.offsetTop - pos2}px`;
              element.style.left = `${element.offsetLeft - pos1}px`;
            };
        
            const dragMouseDown = (event) => {
              event.preventDefault();
        
              pos3 = event.clientX;
              pos4 = event.clientY;
        
              element.classList.add("drag");
        
              document.onmouseup = dragMouseUp;
              document.onmousemove = dragMouseMove;
            };
        
            dragzone.onmousedown = dragMouseDown;
          };
        
          const dragable = document.getElementById("dragable"),
            dragzone = document.getElementById("dragzone");
        
          try{dragElement(dragable, dragzone);}catch(e){}
        
        

    },[])



    return(
        <div className="mainProps" id="dragable">
            <div className="propsBar" id="dragzone">
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
                    {props.item.link!=""&&<div className="cardProps" onClick={()=>{
                        window.open(props.item.link)
                    }}>
                        <p  className="pProps pPropstext1">
                            Link
                        </p>
                        <p className="pProps">
                            {props.item.link.slice(0,40)}...
                        </p>

                    </div>}

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