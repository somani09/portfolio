import React from 'react'
import './infoRow.scss'

function InfoRow({title,value}) {

    function sendSocials(link){
        window.open(link, '_blank');
    }

    return (
        <div className="infoRow" 
            onClick={title === 'Email' ? ()=>sendSocials(`mailto:${value}`):
                    title === 'Phone' ? ()=>sendSocials(`tel:${value}`): undefined
                    }
                    style={{cursor: title === 'Email'  ? 'pointer':
                                    title === 'Phone'  ? 'pointer':
                    'unset'}}
        >
            <span className="mark">:-&nbsp;&nbsp;</span>
            <div>
                <span className="infoTitle">{title}:&nbsp;&nbsp;</span> 
                <span className="infoValue">{value}</span>
            </div>
            
        </div>
    )
}

export default InfoRow
