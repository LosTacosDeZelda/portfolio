import "../sass/Footer.scss";
import tabSocialLinks from "../data/socialMediaLinks.json"
import SocialIcon from "./SocialIcon";

export default function Footer(props) {

    return (
        <div className="Footer">
            
            {
                tabSocialLinks.map(icon => <SocialIcon key={icon.name} url={icon.url} iconName={icon.name}/>)
            }
        
        </div>
        
    );
}