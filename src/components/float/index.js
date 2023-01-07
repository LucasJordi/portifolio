
import "./style.css"
import {ReactComponent as BulbIcon} from '../../assets/icon/bulb-outline.svg'

export const Float=(props)=>{



    return(
        <div className="main">
            <div className="flexIcon">
                <BulbIcon className="iconFloat" />

            </div>
            <div className="flexText">
                <p className="textFloat">{props.text}</p>
                

            </div>

        </div>
    )

}