import React from "react";

class Slideshow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sectionTitle: "",
            activeItemIndex: 0,
            items: [],
            descriptionRequired: false
        };
    }

    static getDerivedStateFromProps(props, state){
        return {
            sectionTitle: props.title,
            items: props.items,
            descriptionRequired: props.descriptionRequired
        };
    }

    getPreviousIndex(index){
        if(index > 0){
            return index - 1;
        }
        else{
            return this.state.items.length - 1;
        }
    }

    getNextIndex(index){
        return (index + 1) % this.state.items.length;
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
            <div className="slideshow-container">
                <h1>{this.state.sectionTitle}</h1>
                <div className="slideshow-item-container">
                    <h2>{this.state.items[this.state.activeItemIndex].title}</h2>

                    <div className="visual-container">
                        {this.state.items[this.state.activeItemIndex].visual}
                    </div>

                    <div className="buttons-container">
                        <button 
                            className="left-button"
                            onClick={() => this.onPreviousClick()}></button>
                        <span>{this.state.activeItemIndex + 1}/{this.state.items.length}</span>
                        <button 
                            className="right-button"
                            onClick={() => this.onNextClick()}></button>
                    </div>

                    {this.state.descriptionRequired 
                        ?<div className="description-container">
                            <p>Description:</p>
                            <p>{this.state.items[this.state.activeItemIndex].description}</p>
                        </div> 
                        : null}

                </div>
            </div>
        )
    }
}

export default Slideshow;
