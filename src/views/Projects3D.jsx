import Slideshow from "./Slideshow";
import berd1 from "../artworks/berd_img1.jpg";
import berd2 from "../artworks/berd_img2.png";
import ObjectCard from "./ObjectCard";
import lionPath from "../resources3D/lion.glb";

const GAMES_INFO = [{
    title: "",
    visual:  <img src={berd1} alt="" />,
},{
    title: "",
    visual: <img src={berd2} alt="" />,  
}];

const ART_WORKS_INFO = [{
    title: "Work Title 1",
    visual: <div className="project3d-container">
                <div className="model-container">
                    <ObjectCard modelPath={lionPath}/>
                </div>
                <div className="project3d-slideshow">
                    <Slideshow 
                        title="Maps"
                        items={GAMES_INFO}
                        descriptionRequired={false}
                    />
                </div>
            </div>
},{
    title: "Work Title2" ,
    visual: <div>hehe2</div>
}];

function Projects3D(){

    return (
        <Slideshow
            title="3D WORKS"
            items={ART_WORKS_INFO}
            descriptionRequired={false}
        />
    );
}

export default Projects3D;
