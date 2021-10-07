import React from "react";

import Carousel from "../components/Carousel"

function HomePage(props) {
    return(
        <div>
            <Carousel className="flex-direction: row-reverse" data={props.data}/>
        </div>
    )
}

export default HomePage