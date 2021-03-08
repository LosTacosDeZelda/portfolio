import "../sass/Page.scss";
import Gallery from "./Gallery";
import Entete from "./Entete";
import DemoReel from "./DemoReel";
import Footer from "./Footer";

export default function Page(props) {
    
    return(
        <div className="page">
            
            <Entete/>
            <DemoReel/>
            <Gallery/>
            <Footer/>
            
        </div>
    );
}