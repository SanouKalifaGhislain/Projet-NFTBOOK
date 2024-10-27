import "../Styles/Footer.css";
import nftbooklogo from "../Images/ntfbooklogo.png";
// Cette fonction renvoie les éléments du pied de page


function Footer(){
    return(
        <footer class="page-footer footer-container">
          <div class="container">
            <div class="row">
                <div className="col s12 m3 l3">
                    <img className="footer_logo" src={nftbooklogo} alt="logo de nftbook"></img>
                </div>
                <div className="col s12 m3 l3">
                    <h5 class="white-text">Market</h5>
                    <ul>
                        <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">About</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Buy NFTs</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Sell NFTs</a></li>
                    </ul>
                </div>
                <div className="col s12 m3 l3">
                    <h5 class="white-text">Contact</h5>
                    <ul>
                        <li><a class="grey-text text-lighten-3" href="#!">Email</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">LinkedIN</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">FaceBook</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Instagram</a></li>
                    </ul>
                </div>
                <div className="col s12 m3 l3">
                    <h5 class="white-text">Join our Newsletter</h5>
                    <div className="row">
                        <div className="col s8 m8 l8">
                            <div class="input-field inline">
                                <input className="footer-email-text" id="email_inline" type="email" class="validate"/>
                                <label for="email_inline">Email</label>
                                <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>
                        <div className="col s4 m4 l4">
                            <button className="footer-email-submit center">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="footer-copyright copyright_section">
            <div class="container center">
            © 2024 Copyright All rights reserved to nftbook 
            </div>
          </div>
        </footer>
    )
}

export default Footer;