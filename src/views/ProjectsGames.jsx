import VideoPlayer from "./VideoPlayer";
import Slideshow from "./Slideshow";

const GAMES_INFO = [{
    title: "game title",
    visual: <VideoPlayer id="https://www.youtube.com/embed/7oDFj53_-_I"/> ,
    description: "In pariatur consequat non fugiat ipsum minim. Voluptate fugiat sit ut commodo sint aliqua aute consectetur velit et. Esse irure occaecat ullamco consectetur ad deserunt sunt adipisicing in laborum non aute deserunt. Nulla consequat sunt laborum anim.",
},{
    title: "another game title",
    visual: <VideoPlayer id="https://www.youtube.com/embed/Ptbxw3AAgH8"/>,   
    description: "Officia id occaecat minim cillum pariatur consequat voluptate id consequat ullamco labore. Do ea qui et velit reprehenderit officia fugiat nisi adipisicing nisi adipisicing nostrud esse. Pariatur reprehenderit veniam incididunt proident cillum minim. Ex pariatur occaecat id ipsum laborum ullamco do magna eiusmod veniam veniam cupidatat magna ea. Sint elit aute qui adipisicing amet ad irure exercitation ut est magna pariatur. Ea magna do quis culpa pariatur sint enim. Nisi elit quis est culpa amet non aliqua ut laboris consequat nulla excepteur."
}];

function Games(){
    return (
        <Slideshow
            title="GAMES"
            items={GAMES_INFO}
            descriptionRequired={true}
        />

    );
}

export default Games;
