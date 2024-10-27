import {team} from './Team';
import "../Styles/OurTeam.css";

// Cette section comporte les membres de l'équipe 

function OurTeam(){
    return(
        <div className="container team-container">
            <div className="row">
                <div className="row">
                    <div className="col s12 m4 l4"></div>
                    <div className="col s12 m4 l4 center team-title">Our <span className="team-title-color">Team</span></div>
                    <div className="col s12 m4 l4"></div>
                </div>
                {team.map((item)=>(
                    <div key={item.id} className="col s12 m4 l4">
                        <div className="card profile-card">
                            {/* Avatar circulaire */}
                            <img src={item.photo} alt="member_photo" className="circle responsive-img profile-image"/>

                            {/* <!-- Nom et titre --> */}
                            <h5 className="profile-name">{item.name}</h5>
                            <p className="profile-job">{item.job}</p>

                            {/* <!-- Icônes des réseaux sociaux --> */}
                            <div className="social-icons">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurTeam;