// Cette partie présente les différents logos des différents partenaires de NFT-BOOK
import "../Styles/Partner.css";
import ethereum_logo from "../Images/ethereum_logo.png"; 
import Trustwallet from "../Images/Trustwallet.png"; 
import logo_kucibok from "../Images/logo_kucibok.png"; 
import Edition_harmattan from "../Images/Edition_harmattan.png"; 


function Partner(){
    return(
        <div>
            <div className="container partner-container">
                <p className="partner-section-title">FEATURED ON</p>
                <div className="row partners-logos">
                    <div className="col s12 s3 l3 center"><img src={ethereum_logo} alt="logo de etheureum" className="logo"></img></div>
                    <div className="col s12 s3 l3 center"><img src={Trustwallet} alt="logo de trustwallet" className="logo"></img></div>
                    <div className="col s12 s3 l3 center"><img src={logo_kucibok} alt="logo de kucibok" className="logo"></img></div>
                    <div className="col s12 s3 l3 center"><img src={Edition_harmattan} alt="logo" className="logo de l'édition harmattan"></img></div>
                </div>
            </div>
            <div className="container partner-second-container">
            <div className="row">
                    <div className="col s4 m4 l4"></div>
                    <div className="col s4 m4 l4"><p className="message-header center">ARE YOU READY ?</p></div>
                    <div className="col s4 m4 l4"></div>
                </div>
                <div className="row">
                    <div className="col s3 m3 l3"></div>
                    <div className="col s6 m6 l6"><p className="message center">Be A Part Of The Next Big Thing</p></div>
                    <div className="col s m4 l4"></div>
                </div>
            </div>
        </div>
    )
}

export default Partner;