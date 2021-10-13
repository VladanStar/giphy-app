import React from 'react';
import './Gif.css';


const Gif = (props) => {
    const showId = () => {
        console.log(props.gifId)
    }
    return (
        <div className="Gif__wrapper">
            <img alt="Random GIF" src={props.img} />
            <button onClick={showId}>Remove</button>
        </div>
    )
}

export { Gif }

