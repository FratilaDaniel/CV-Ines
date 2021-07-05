import React from "react";
import VideoPlayer from "./VideoPlayer";

const GAMES_INFO = [{
    title: "game title",
    url: "https://www.youtube.com/embed/7oDFj53_-_I",   
    description: "In pariatur consequat non fugiat ipsum minim. Voluptate fugiat sit ut commodo sint aliqua aute consectetur velit et. Esse irure occaecat ullamco consectetur ad deserunt sunt adipisicing in laborum non aute deserunt. Nulla consequat sunt laborum anim.",
},{
    title: "another game title",
    url: "https://www.youtube.com/embed/Ptbxw3AAgH8",   
    description: "Officia id occaecat minim cillum pariatur consequat voluptate id consequat ullamco labore. Do ea qui et velit reprehenderit officia fugiat nisi adipisicing nisi adipisicing nostrud esse. Pariatur reprehenderit veniam incididunt proident cillum minim. Ex pariatur occaecat id ipsum laborum ullamco do magna eiusmod veniam veniam cupidatat magna ea. Sint elit aute qui adipisicing amet ad irure exercitation ut est magna pariatur. Ea magna do quis culpa pariatur sint enim. Nisi elit quis est culpa amet non aliqua ut laboris consequat nulla excepteur."
}];

class Games extends React.Component{
    constructor(){
        super();
        this.state = {
            activeItemIndex: 0
        };
    }

    getPreviousIndex(index){
        if(index > 0){
            return index - 1;
        }
        else{
            return GAMES_INFO.length - 1;
        }
    }

    getNextIndex(index){
        console.log(index, (index + 1) % GAMES_INFO.length)
        return (index + 1) % GAMES_INFO.length;
    }


    onPreviousClick(){
        this.setState((oldState) => ({
                activeItemIndex: this.getPreviousIndex(oldState.activeItemIndex)
        }));
    }

    
    onNextClick(){
        this.setState(oldState => ({
            activeItemIndex: this.getNextIndex(oldState.activeItemIndex)
        }));
    }


    render(){
        return (
            <div className="games-container">
                <h1>GAMES</h1>
                    <div className="single-game-container">
                        <h2>{GAMES_INFO[this.state.activeItemIndex].title}</h2>
                        <div className="video-container">
                            <button 
                                className="left-button"
                                onClick={() => this.onPreviousClick()}></button>
                            <VideoPlayer
                                id={GAMES_INFO[this.state.activeItemIndex].url}
                            />
                            <button 
                                className="right-button"
                                onClick={() => this.onNextClick()}></button>
                        </div>
                        <p>DESCRIPTION:</p>
                        <p>{GAMES_INFO[this.state.activeItemIndex].description}</p>
                    </div>
            </div>
        );
    }
}

export default Games;
