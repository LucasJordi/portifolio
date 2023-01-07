import './style.css';
import logoArch from '../../assets/arch2.png'
import {ReactComponent as BateryIcon} from '../../assets/icon/battery-charging-outline.svg'
import {ReactComponent as WifiIcon} from '../../assets/icon/wifi-outline.svg'
import {ReactComponent as VolumeIcon} from '../../assets/icon/volume-medium.svg'
import {ReactComponent as CafeOutIcon} from '../../assets/icon/cafe-outline.svg'
import {ReactComponent as CafeIcon} from '../../assets/icon/cafe.svg'
import {ReactComponent as CafeFillIcon} from '../../assets/icon/cafe-filled.svg'
import { useEffect, useState } from 'react';
import { Float } from '../float';
import { MenuTools } from '../menuTools';



export const MenuBar=()=>{
    const [date,setDate]=useState(new Date())
    const [clickCafe,setClickCafe]=useState(false)
    const [float,setFloat]=useState(false)
    const [menu,setMenu]=useState(false)

    const [textFloat,setTextFloat]=useState("")

    const dias=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]
    const formatDate=()=>{
        return `${dias[date.getMonth()]} ${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    }
    useEffect(()=>{
        
        window.addEventListener("click",(event)=>{
            if(menu){
                try{
                    const element=document.querySelector(".mainMenuTool")
                    let classes=["mainMenuTool","wifiAndOthers"]
                    element.childNodes.forEach(element=>{
                        classes.push(element.className)
                    })
                    const classesContain=classes.includes(event.target.className)
                    console.log(classesContain)
                    if(menu && !classesContain){
                        setMenu(false)

                    }

                }catch(e){
                    
                }
                

            }
            
        
        })
    },[])
    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())

        },1000)


    },[])
    const clickChangeCafe=()=>{
        setTextFloat("Auto suspended and screensaver enabled")
        setClickCafe(!clickCafe)
        if(!clickCafe){
            setFloat(true)

            setTimeout(()=>{
                setFloat(false)

            },2000)
        }else{
            setFloat(false)
        }
    }

    return(
        <>
        {float&&<Float text={textFloat}/>}
        {menu && <MenuTools/>}
        <div className="bar">
            <div class="cantos">
                <div className='divLogo'>
                    <img className='imgLogo' src={logoArch}/>

                </div>
            </div>
            <div className="meio">
                <div >
                    <p class="textHour hourPan">
                        {formatDate()}

                    </p>
                </div>
                

            </div>
            <div className="cantos flexRight">
                <div className='othersPanel' onClick={()=>clickChangeCafe()} >
                    {clickCafe? <CafeOutIcon className='iconCafe' />:
                    <CafeIcon className='iconCafe'/>}
                

                </div>
                <div className='othersPanel'>
                    <p class="textHour">
                        pt

                    </p>

                </div>

                <div className="wifiAndOthers" onClick={()=>{
                    setTimeout(()=>{setMenu(!menu)},500)
                    
                }} 
                >
                    <WifiIcon className="iconW" />
                    <VolumeIcon className="iconW" />
                    <BateryIcon className="iconW" />

                </div>
                

                
                
            </div>
            <div className='menuClick' >

            </div>
           
        </div>
        </>
    )

}