import React from "react";
import './style.css'

const GreyImg = (props) => {
    return (
        <img className={props.grey ? 'grey-image' : 'color-image'} 
        src={props.img_url}
        alt='not found'>
        </img>
    )
}

export default GreyImg;