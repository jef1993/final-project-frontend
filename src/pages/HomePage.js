import React from "react";

import MovieLists from "../components/Carousel"

function HomePage(props) {
    return(
        <div>
            <MovieLists className="Home-Page-Carousel" data={props.data}/>
        </div>
    )
}

export default HomePage