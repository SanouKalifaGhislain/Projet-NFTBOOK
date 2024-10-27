import '../Styles/Section3.css';
import { product_overview } from './section3_data';
// Cette section permet d'afficher quelques articles de la bibliothèque

function Section3(){

    return(
        <div className="container section3_container">
            <p className="section3_title center">Latest News</p>
           <div className="row section3_row">
                    {product_overview.map((item)=>(
                        <div key={item.id} className="col s12 m3 l3">
                                <div className="card section3_card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator" src={item.image} alt=""/>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">{item.nom}<i className="material-icons right">more_vert</i></span>
                                        <p>text</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">{item.nom}<i className="material-icons right">close</i></span>
                                        <p>{item.description}</p>
                                    </div>
                            </div>
                        </div>
                 ))}
            </div> 
            <div className="row">
                 <div className="col s4 m4 l4"></div>
                 <div className="col s4 m4 l4 center"><button className="button_explore">EXPLORE</button></div>
                 <div className="col s4 m4 l4"></div>
            </div>
        </div>
    )
}

export default Section3;


