import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Footer() {
    return (
        
        <footer>
            <Navbar  fixed="bottom" className="bottomNavbar">

                <Nav.Link href="/"> <img className="homeIcon icon" src="/image/home.png" /> </Nav.Link>
                <Nav.Link href="/LiveFixture"> <img className="homeStreaming icon" src="/image/streaming.png" /> </Nav.Link>
                <Nav.Link href="/User"> <img className="homeProfil icon" src="/image/profil.png" /> </Nav.Link>
                {/* <button onClick={logout}>Logout</button> */}


            </Navbar>
        </footer>
    );
}

export default Footer;
