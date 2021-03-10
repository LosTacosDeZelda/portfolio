import "../sass/TopBar.scss";
import {useContext} from "react";
import {Context} from "./Wrapper";


export default function TopBar(props) {

    const context = useContext(Context);
    
    console.log(context.locale);
    return (
       <header className="TopBar">
           <div id="langs">
                <span className={(context.locale === "fr")?"white" :"black"} onClick={() => {context.selectLanguage('fr')}}>FR</span>
                <span>|</span>
                <span className={(context.locale === "en")?"white" :"black"} onClick={() => {context.selectLanguage('en')}}>EN</span>
           </div>
       </header>

    );
}