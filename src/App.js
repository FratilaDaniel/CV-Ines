import './App.css';
import Header from "./views/Header";
import PersonalDetails from './views/PersonalDetails';
import Projects3D from './views/Projects3D';
import Artworks from './views/ProjectsArtworks';
import Games from './views/ProjectsGames';
import Footer from "./views/Footer";
import Navbar from "./views/Navbar";
import Contact from './views/Contact';
import WarningModal from './views/WarningModal';

function App() {
    return (
            <div>
                <WarningModal/>
                {/* Header - name + bkg img */}
                <Header/>
                {/* Navbar menu + decorations */}
                <Navbar/>
                {/* PersonalDetails - about me section */}
                <PersonalDetails/>
                {/* Projects - 3D works */}
                <Projects3D/>
                {/* Projects - games */}
                <Games/>
                {/* Projects - art works */}
                <Artworks/>
                {/* Contact - get in touch info */}
                <Contact/>
                {/* Footer - credits: Dani */}
                <Footer/>
            </div>
        );
    
}

export default App;
