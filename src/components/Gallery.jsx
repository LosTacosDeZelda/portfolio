import Video from "./Video";
import tabVideos from "../data/videos.json";

import "../sass/Gallery.scss";

export default function Gallery(props) {
    
    return(
        <div className="Gallery">
            <h3>Galerie</h3>
            <div className="projets">
            
             {tabVideos.map(video => 
                     <Video key={video.title} toolTip={video.toolTip} onYoutube={true} videoUrl={video.videoUrl} gameUrl={video.gameUrl} title={video.title}/>
                )}
            </div>
        </div>
        
    );
}