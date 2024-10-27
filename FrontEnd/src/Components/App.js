import NavBar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import OurTeam from "./OurTeam";
import Partner from "./Partner";
import Footer from "./Footer";
import "../Styles/index.css";
// Cette fonction affiche le contenu global de notre application
function App() {
  return (
      <div>
        <NavBar />
        <Section1 />
        <Section2 />
        <Section3 />
        <OurTeam />
        <Partner />
        <Footer />
      </div>
  );
}

export default App;
