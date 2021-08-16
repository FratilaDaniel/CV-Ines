import React from "react";
import berdImg1 from "../artworks/berd_img1.jpg";
import berdImg2 from "../artworks/berd_img2.png";
import Slideshow from "./Slideshow";

const ART_WORKS_INFO = [{
    title: "A picture of berd",
    visual: <img src={berdImg1} alt=""/>
},{
    title: "A better view of berd" ,
    visual: <img src={berdImg2} alt=""/>
}];


function Artworks(){
    return (
        <Slideshow
            title="ART WORKS"
            items={ART_WORKS_INFO}
            descriptionRequired={false}
        />
    );
}

export default Artworks;
