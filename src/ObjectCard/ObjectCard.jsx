import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Color, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import React from "react";
import lionPath from "../resources3D/lion_wL_3.glb";

class ObjectCard extends React.Component{
    constructor(){
        super();
        this.state = {
            elementIsActive: false,
            animationStarted: true
        };
    }

    componentDidMount(){
        this.animateThings();
    }


    animateThings(){
        const scene = new Scene();
        const camera = new PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000);
        const renderer = new WebGLRenderer({antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.physicallyCorrectLights = true;
        scene.background = new Color("grey");
        this.mount.appendChild(renderer.domElement);
        
        let model;

        const loader = new GLTFLoader();    
        loader.load(lionPath, function(gltf){
            model = gltf.scene;
            scene.add(model);
        }, 
        undefined, // loading animation/text function 
        function(e){
            console.log("AAAAAAAAAAAAAAAAAA");
            console.log(e);
        });

        camera.rotation.x = -0.5;
        camera.position.y = 5;
        camera.position.z = 7;

        function startAnimation(){
            // default behavior: rotate
            // stop when user hovers/clicks
            requestAnimationFrame(startAnimation);   
            // console.log(frameId, shouldAnimationPlay);
            if(model){
                model.rotation.y += 0.01;
                renderer.render(scene, camera);         
            }
        }
        return requestAnimationFrame(startAnimation);
    }


    render(){
        return (
            <div ref={ref => (this.mount = ref)}>
            </div>
        )
    }
}

export default ObjectCard;
