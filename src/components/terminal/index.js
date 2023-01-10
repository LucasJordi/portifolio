
import "./style.css"
import {ReactComponent as CloseIcon} from '../../assets/icon/close.svg'
import pipMusicIcon from "../../assets/apps/pipMusic.png"
import { useEffect, useState } from "react"
import gitIcon from "../../assets/apps/git.png"
export const Terminal=(props)=>{
    const [desc,setDesc]=useState({id:"",desc:""})
    
    
    useEffect(()=>{   
        const inputDot=document.querySelector(".inPutTerminal")
        // const dot=document.querySelector(".terminalDotAnim")
        // document.querySelector(".terminalDotAnim").style.left=(inputDot.scrollWidth+15)+"px"
        console.log(inputDot.inputX)  
        
        
        
       
        
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
        <div className="mainPropsTerminal" id="dragable">
            <div className="propsBarTerminal" id="dragzone">
                <p className="textPropsBarTerminal">yujin@artisan-infinity</p>
                <div className="propsBtnCloseTerminal" onClick={()=>{
                    props.setOpen(false)
                }}>
                    <CloseIcon />

                </div>

            </div>
            <div className="propsContentTerminal">
                <div  className="divTerminalText">
                    <p className="terminalInp">[yujin@artisan-infinity ~]$  </p>
                    <div className="terminalDotAnim"></div>
                    <input onChange={(event)=>{
                        const inputDot=document.querySelector(".inPutTerminal")
                        // const dot=document.querySelector(".terminalDotAnim")
                        // document.querySelector(".terminalDotAnim").style.left=(inputDot.scrollWidth+15)+"px"
                        console.log(inputDot)  
                    }} className="inPutTerminal">
                        
                    </input>

                </div>
                
                
                
            </div>
            

        </div>
    )

}