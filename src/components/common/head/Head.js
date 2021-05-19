import React from 'react'
import './head.scss'
function Head({title, text}) {
    return (
        <div className="head flex-col">
        <div className="heading text-center">{title}</div>
        {text!==""?<div className="m-20 text-center">{text}</div>:null}
    </div>
    )
}

export default Head
