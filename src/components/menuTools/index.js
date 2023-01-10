
import "./style.css"
import {ReactComponent as CameraIcon} from '../../assets/icon/camera-outline.svg'
import {ReactComponent as SettingsIcon} from '../../assets/icon/settings.svg'
import {ReactComponent as LockIcon} from '../../assets/icon/lock-closed.svg'
import {ReactComponent as PowerIcon} from '../../assets/icon/power.svg'
import {ReactComponent as VolumeIcon} from '../../assets/icon/volume-medium.svg'
import {ReactComponent as SunIcon} from '../../assets/icon/sunny.svg'
import {ReactComponent as BatteryIcon} from '../../assets/icon/battery-charging-outline.svg'
import {ReactComponent as WifiIcon} from '../../assets/icon/wifi-outline.svg'
import {ReactComponent as BluetoothIcon} from '../../assets/icon/bluetooth-outline.svg'
import {ReactComponent as PlaneIcon} from '../../assets/icon/airplane.svg'
import {ReactComponent as ContrastIcon} from '../../assets/icon/contrast-outline.svg'



import { useEffect } from "react"

export const MenuTools=(props)=>{
    


    return(
        <div className="mainMenuTool">
            <div className="divMainToolF1">
                <div className="divMainToolF1Flex1">
                <BatteryIcon className="iconTopMenuTool"/>


                </div>
                <div className="divMainToolF1Flex2">
                    <CameraIcon className="iconTopMenuTool"/>
                    <SettingsIcon className="iconTopMenuTool"/>
                    <LockIcon className="iconTopMenuTool"/>

                    <PowerIcon className="iconTopMenuTool"/>

                    
                </div>

            </div>
            <div className="divMainToolF2">
                <div className="menuToolSoundBrig">
                    <VolumeIcon className="iconTopMenuTool2"/>
                    <input type="range" className="radioMenuTool" name="toggle_option"  />


                </div>
                <div className="menuToolSoundBrig">
                    <SunIcon className="iconTopMenuTool2"/>
                    <input type="range" className="radioMenuTool" name="toggle_option"  />



                </div>
                
            </div>
            <div className="divMainToolF3">
                <div className="cardMenuTool">
                    <WifiIcon className="iconTopMenuTool3"/>
                    <p className="menuCardText">Wi-fi</p>


                </div>
                <div className="cardMenuTool">
                    <BluetoothIcon className="iconTopMenuTool3"/>
                    <p className="menuCardText">Bluetooth</p>

                </div>
                <div className="cardMenuTool">
                    <PlaneIcon className="iconTopMenuTool3"/>
                    <p className="menuCardText">Modo Avião</p>

                </div>
                
                <div className="cardMenuTool">
                    <ContrastIcon className="iconTopMenuTool3"/>
                    <p className="menuCardText">Modo Escuro</p>

                </div>
                
            </div>
            

        </div>
    )

}