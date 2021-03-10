import ItchioIcon from "../img/logos/itchio-textless-black.svg";
import YoutubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import MailIcon from '@material-ui/icons/Mail';
import IconButton from "@material-ui/core/IconButton";

let MyIcon;

function Icon(props) {

    switch (props.iconName) {
        case "Itch":
            MyIcon = <img className="icon" src={ItchioIcon} alt="Itch.io Logo"/>
            break;
        case "Youtube":
            MyIcon =  <YoutubeIcon fontSize="large" />
            break;
        case "Twitter":
            MyIcon = <TwitterIcon fontSize="large" />
            break;
        case "LinkedIn":
            MyIcon = <LinkedinIcon fontSize="large" />
            break;
        case "Mail":
            MyIcon = <MailIcon fontSize="large" />
            break;
        
        
    
        default:
            break;
    }

    return MyIcon;
}

export default function SocialIcon(props) {
     
    return(
        <a href={props.url} target="blank">
            <IconButton>
              <Icon iconName={props.iconName}/>
            </IconButton>
        </a>
        
    );
    
    
}
