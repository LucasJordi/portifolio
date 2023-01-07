
import "./style.css"
import {ReactComponent as CameraIcon} from '../../assets/icon/camera-outline.svg'
import {ReactComponent as SettingsIcon} from '../../assets/icon/settings.svg'
import {ReactComponent as LockIcon} from '../../assets/icon/lock-closed.svg'
import {ReactComponent as PowerIcon} from '../../assets/icon/power.svg'
import { useEffect } from "react"

export const MenuTools=(props)=>{
    


    return(
        <div className="mainMenuTool">
            <div className="divMainToolF1">
                <div className="divMainToolF1Flex1">

                </div>
                <div className="divMainToolF1Flex2">
                    <CameraIcon className="iconTopMenuTool"/>
                    <SettingsIcon className="iconTopMenuTool"/>
                    <LockIcon className="iconTopMenuTool"/>

                    <PowerIcon className="iconTopMenuTool"/>

                    
                </div>

            </div>
            <div className="divMainToolF2">
                
            </div>
            <div className="divMainToolF3">
                
            </div>
            

        </div>
    )

}