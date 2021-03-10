import "../sass/Video.scss";
// import { FormattedMessage } from 'react-intl';

export default function Video(props) {

    if (props.onYoutube === true) {
        return (
            <a href={props.gameUrl} target="blank">
            <h4>{props.title}</h4>
            <div className="Video">
                <div className="iframe-wrapper">
                    <iframe title={props.title} width="1280" height="720" src={props.videoUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            </a>
        );
    }
    else {
        return (
            <div> {/* Mettre classname Video ici */}
                <h4>{props.title}</h4>
                <a href={props.gameUrl} target="blank">
                    <video className="Video" width="500" autoPlay loop muted title={props.toolTip}>
                        <source src={props.videoUrl} />
                    </video>
                </a>
            </div>


        );

    }

}