import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import React from "react";

const MIN_ZOOM_VALUE = 3;
const INITIAL_ZOOM_VALUE = 7;
const MAX_ZOOM_VALUE = 10;
const NORMALIZATION_FACTOR = 10;


class ObjectCard extends React.Component{
    constructor(props){
        super(props);
        this.modelPath = props.modelPath;
        this.state = {
            isMouseOver: false,
            animationStarted: true,
            zoomLevel: INITIAL_ZOOM_VALUE
        };
    }

    componentDidMount(){
        this.animateThings();
    }


    animateThings(){
        const scene = new Scene();
        const camera = new PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000);
        const renderer = new WebGLRenderer({antialias: true, alpha: true});
        renderer.setSize(300, 300);
        renderer.physicallyCorrectLights = true;
        renderer.setClearColor(0x000000, 0);
        this.mount.appendChild(renderer.domElement);
        
        let model;

        const loader = new GLTFLoader();    
        loader.load(this.modelPath, function(gltf){
            model = gltf.scene;
            scene.add(model);
        }, 
        undefined, // loading animation/text function 
        function(e){
            console.log("AAAAAAAAAAAAAAAAAA", e);
        });

        camera.rotation.x = -0.5;
        camera.position.y = 5;

        this.startAnimation = () => {
            camera.position.z = this.state.zoomLevel;

            if(model && !this.state.isMouseOver){
                model.rotation.y += 0.01;
            }
            // default behavior: rotate
            // stop when user hovers/clicks
            requestAnimationFrame(this.startAnimation);   
            renderer.render(scene, camera);   
        }
        return requestAnimationFrame(this.startAnimation);
    }

    handleMouseOver(){
        this.setState({
            isMouseOver: true
        });
    }

    handleMouseOut(){
        this.setState({
            isMouseOver: false
        });
    }

    handleWheel(e){
        // should prevent default (page scroll)
        const changeValue = e.deltaY;
        this.setState((oldState) => {
            let newZoomValue = oldState.zoomLevel + Math.sign(changeValue) / NORMALIZATION_FACTOR;
            if(newZoomValue < MIN_ZOOM_VALUE){
                newZoomValue = MIN_ZOOM_VALUE;
            }
            else if(newZoomValue > MAX_ZOOM_VALUE){
                newZoomValue = MAX_ZOOM_VALUE
            }
            return {
                zoomLevel: newZoomValue
            }
        });
    }


    render(){
        return (
            <div
                className="card-div" 
                ref={ref => (this.mount = ref)}
                onMouseOver={() => this.handleMouseOver()}
                onMouseOut={() => this.handleMouseOut()}
                onWheel={(e) => this.handleWheel(e)}
            >
            </div>
        )
    }
}

export default ObjectCard;
