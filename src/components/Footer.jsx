import "../sass/Footer.scss";
import tabSocialLinks from "../data/socialMediaLinks.json"
import SocialIcon from "./SocialIcon";
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from "@material-ui/core/IconButton";

export default function Footer(props) {

    return (
        <div className="Footer">
            <div>
            {
                tabSocialLinks.map(icon => <SocialIcon key={icon.name} url={icon.url} iconName={icon.name}/>)
            }
            </div>
            
            <div>
                <span>Télécharger mon CV</span>
                <a href="%PUBLIC_URL%/docs/Raphaël_Jeudy_CV_FR.pdf" download>
                <IconButton>
                    <GetAppIcon fontSize="large"></GetAppIcon>
                </IconButton>
                </a>
            </div>
            
                
        </div>
        
    );
}