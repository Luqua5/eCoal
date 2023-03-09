import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import home from "../image/home.png";
import streaming from "../image/streaming.png";
import profil from "../image/profil.png";

function Footer() {
    return (
        
        <footer>
            <Navbar bg="light" fixed="bottom" className="bottomNavbar">

                <Nav.Link href="/"> <img className="homeIcon icon" src={home} /> </Nav.Link>
                <Nav.Link href="/LiveFixture"> <img className="homeStreaming icon" src={streaming} /> </Nav.Link>
                <Nav.Link href="/User"> <img className="homeProfil icon" src={profil} /> </Nav.Link>
                {/* <button onClick={logout}>Logout</button> */}


            </Navbar>
        </footer>
    );
}

export default Footer;
