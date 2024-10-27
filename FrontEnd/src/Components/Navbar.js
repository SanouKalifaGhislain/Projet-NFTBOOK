import React,{Component} from 'react';
import nftbooklogo from '../Images/ntfbooklogo.png';
import '../Styles/navbar.css';
// Ce composant nous permet de créer notre barre de navigation avec tous les éléments la constituant

class NavBar extends Component{
    render(){
        return(
            <div>
                <nav className='barre_navigation'>
                    <div className=" container nav-wrapper">
                    <a href="link#" className="brand-logo"><img className="logo" src={nftbooklogo} alt="Logo de nftbook"></img></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className="navbar_li"><a href="link#" className="white-text navbar_item">Home</a></li>
                        <li className="navbar_li"><a href="link#" className="white-text navbar_item">Library</a></li>
                        <li className="navbar_li"><a href="link#" className="white-text navbar_item">Marketplace</a></li>
                        <li><button className="button_login">login</button></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )  
    }
}

export default NavBar;