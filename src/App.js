import './App.css';
import ObjectCard from './ObjectCard/ObjectCard';
import Header from "./views/Header";
import Navbar from './views/Navbar';
import PersonalDetails from './views/PersonalDetails';
import Projects3D from './views/Projects3D';
import Artworks from './views/ProjectsArtworks';
import Games from './views/ProjectsGames';
import Footer from "./views/Footer";

function App() {
    return (
            <div className="general-container">
                {/* Header - name + bkg img */}
                <Header/>
                {/* Navbar - plus decorators */}
                <Navbar/>
                {/* PersonalDetails - about me section */}
                <PersonalDetails/>
                {/* Projects - 3D works */}
                <Projects3D/>
                {/* Projects - games */}
                <Games/>
                {/* Projects - art works */}
                <Artworks/>
                {/* Footer - credits: Dani */}
                <Footer/>
                
                {/* <div className="random-div">
                    this is a random div to test mouse hover for other elementIsActive
                    <br/>
                    <button>Random button</button>
                </div>
               <ObjectCard/>  */}
            </div>
        );
    
}

export default App;
