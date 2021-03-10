import "../sass/Footer.scss";
import tabSocialLinks from "../data/socialMediaLinks.json"
import SocialIcon from "./SocialIcon";
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from "@material-ui/core/IconButton";
import { FormattedMessage } from 'react-intl';



export default function Footer(props) {

    return (
        <div className="Footer">
            <div>
                {
                    tabSocialLinks.map(icon => <SocialIcon key={icon.name} url={icon.url} iconName={icon.name} />)
                }
            </div>

            <div>
                <span>
                    <FormattedMessage id="downloadCV" description="message" defaultMessage="Download my CV"/>
                </span>
                <a href="/docs/Raphaël_Jeudy_CV_FR.pdf" download='RaphCV'>
                    <IconButton>
                        <GetAppIcon fontSize="large"></GetAppIcon>
                    </IconButton>
                </a>
            </div>


        </div>

    );
}