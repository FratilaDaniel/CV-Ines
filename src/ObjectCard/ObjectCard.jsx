import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Color, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import React from "react";
import lionPath from "../resources3D/lion_wL_3.glb";

class ObjectCard extends React.Component{
    componentDidMount(){
        const scene = new Scene();
        const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const renderer = new WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.physicallyCorrectLights = true;
        scene.background = new Color("grey");
        document.body.appendChild(renderer.domElement);

        const loader = new GLTFLoader();    
        loader.load(lionPath, function(gltf){
            scene.add(gltf.scene);
        }, 
        undefined, // loading animation function 
        function(e){
            console.log("AAAAAAAAAAAAAAAAAA");
            console.log(e);
        });

        camera.position.z = 6;

        function animate(){
            requestAnimationFrame(animate);                        
            renderer.render(scene, camera);
        }

        animate();
    }

    render(){
        return (<div></div>)
    }
}

export default ObjectCard;
