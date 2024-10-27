import React,{Component} from 'react';
import '../Styles/Section1.css';
import img_section1 from '../Images/img_section1.png';
// Ce composant contient la section 1 de notre page d'accueil

class Section1 extends Component{
    render(){
        return(
           <div className="container section1_container">
                <div className="row">
                    <div className="col s12 m6 l6 xl6">
                        <h1 className="section1_h1">The NFT In Another Way With <span>NFT-BOOK</span></h1>
                        <p className="section1_p">Whether you are an author, reader or collector, you will find everything you need securely with NFT-BOOK.</p>
                        <div className="row">
                            <div className='col s4 m4 l4'></div>
                            <div className='col s4 m4 l4'><button className="section1_button center">MORE</button></div>
                            <div className='col s4 m4 l4'></div>
                        </div>
                    </div>
                    <div className="col s12 m6 l6 xl6">
                        <img className="img_section1" src={img_section1} alt="nft et livre"></img>
                    </div>
                </div>
                <div className="separator-bar-container">
                    <div className="separator-bar separator-blue"></div>
                    <div className="separator-bar separator-gradient"></div>
                    <div className="separator-bar separator-blue"></div>
                    <div className="separator-bar separator-gradient"></div>
                    <div className="separator-bar separator-blue"></div>
                    <div className="separator-bar separator-gradient"></div>
                    <div className="separator-bar separator-blue"></div>
                    <div className="separator-bar separator-gradient"></div>
                    <div className="separator-bar separator-blue"></div>
                </div>
           </div>
        )
    }
}

export default Section1;