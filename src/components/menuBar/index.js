import './style.css';
import logoArch from '../../assets/arch2.png'
import {ReactComponent as BateryIcon} from '../../assets/icon/battery-charging-outline.svg'
import {ReactComponent as WifiIcon} from '../../assets/icon/wifi-outline.svg'
import {ReactComponent as VolumeIcon} from '../../assets/icon/volume-medium.svg'
import {ReactComponent as CafeOutIcon} from '../../assets/icon/cafe-outline.svg'
import { useEffect, useState } from 'react';



export const MenuBar=()=>{
    const [date,setDate]=useState(new Date())
    const dias=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]
    const formatDate=()=>{
        return `${dias[date.getMonth()]} ${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    }
    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())

        },1000)

    },[])

    return(
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
                <div className='othersPanel'>
                    <CafeOutIcon className='iconCafe' />
                

                </div>
                <div className='othersPanel'>
                    <p class="textHour">
                        pt

                    </p>

                </div>

                <div className="wifiAndOthers">
                    <WifiIcon className="iconW" />
                    <VolumeIcon className="iconW" />
                    <BateryIcon className="iconW" />

                </div>
                

                
                
            </div>
            <div className='menuClick' >

            </div>
           
        </div>
    )

}