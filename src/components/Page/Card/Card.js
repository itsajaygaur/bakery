import React from 'react'
import "./card.css"

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.img} />
            <div className='description'>
                <h5>{props.name}</h5>
                <p>{props.price}</p>
            </div>
            <button> <span>+</span>{props.quantity} </button>
        </div>
    )
}

export default Card