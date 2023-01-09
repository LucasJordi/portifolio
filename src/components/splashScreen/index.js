
import "./style.css"
import splashArchIcon from "../../assets/splashScreen/archKde/arch-logo.png"
import splashLoadIcon from "../../assets/splashScreen/archKde/loading.png"

export const SplashScreen=()=>{


    return(
        <div className="splashMain">
            <img className="iconSplash" src={splashArchIcon} />
            <img className="iconSplashLoading" src={splashLoadIcon} />


        </div>
    )
}