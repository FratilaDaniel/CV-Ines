import Navbar from "./Navbar";

function Header(){

    return (
        <div className="header-container">
            <img src="backg.png" alt=""/>
            <div className="names-container">
                <p>ines</p>
                <p>simonica</p>
            </div>
            <Navbar/>
        </div>
    );
}

export default Header;
