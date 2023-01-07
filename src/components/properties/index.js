
import "./style.css"
import {ReactComponent as CloseIcon} from '../../assets/icon/close.svg'
import pipMusicIcon from "../../assets/apps/pipMusic.png"
import { useEffect, useState } from "react"
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
                    <img src={props.item.icon} className="propsIconApp" />
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
                            {desc.desc}
                        </p>

                    </div>
                    
                    
                    

                </div>
                
            </div>
            

        </div>
    )

}