import React, {Component} from 'react';
import '../Styles/Section2.css';
import register from '../Images/register.png';
import add from '../Images/add.png';
import sell_nft from '../Images/sell_nft.png';

// Cette fonction concerne la section2 de notre interface d'accueil

class Section2 extends Component{
    render(){
        return(
           <div className="container section2_container">
                <div className="row">
                    <div className="col s4 m4 l4"></div>
                    <div className="col s4 m4 l4 section2_title center">GET STARTED !</div>
                    <div className="col s4 m4 l4"></div>
                </div>
                <div className="row">
                    <div className="col s12 m4 l4 center">
                        <img src={register} alt="logo indiquant l'enregistrement"></img>
                        <p className="section2_item_title">Register</p>
                        <div className="row">
                            <div className="col s2 m2 l2"></div>
                            <div className="col s8 m8 l8"><p className="section2_paragraph">After registering, users (Author or clients)  have access to their dashboard</p></div>
                            <div className="col s2 m2 l2"></div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4 center">
                        <img src={add} alt="logo indiquant l'enregistrement"></img>
                        <p className="section2_item_title">Create & Add NFT’s</p>
                        <div className="row">
                            <div className="col s2 m2 l2"></div>
                            <div className="col s8 m8 l8"><p className="section2_paragraph">Convert your books into NFT's and add them to the platform</p></div>
                            <div className="col s2 m2 l2"></div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4 center">
                        <img src={sell_nft} alt="logo indiquant l'enregistrement"></img>
                        <p className="section2_item_title">Start Selling</p>
                        <div className="row">
                            <div className="col s2 m2 l2"></div>
                            <div className="col s8 m8 l8"><p className="section2_paragraph">Submit your articles in the library and resell in the marketplace</p></div>
                            <div className="col s2 m2 l2"></div>
                        </div>
                        <p className="section2_paragraph center"></p>
                    </div>
                </div>
           </div>
        )
    }
}

export default Section2;