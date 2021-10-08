import React from "react"

import CardInfo from "./CardInfo"

function Card(props) {
    return(
        <div className="d-inline-block m-card" onClick={(e) => props.click(props.item)}>
            <img className="m-card-image" src={`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`} Class="d-block w-100" alt={props.item.imgSrc}/>
            {props.item.selected && <CardInfo title={props.item.title} overview={props.item.overview} link={props.item.link}/>}
        </div>
    )
}

// Class="d-block w-100"
export default Card