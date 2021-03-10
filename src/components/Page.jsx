import "../sass/Page.scss";
import Gallery from "./Gallery";
import Entete from "./Entete";
import DemoReel from "./DemoReel";
import Footer from "./Footer";
import TopBar from "./TopBar";


export default function Page(props) {


    return(
        <div className="page">
            
            <TopBar/>
            <Entete/>
            <DemoReel/>
            <Gallery/>
            <Footer/>
            
        </div>
    );
}