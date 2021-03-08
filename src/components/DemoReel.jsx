import Video from "./Video";
import "../sass/DemoReel.scss";

export default function DemoReel(props) {
    
    return(
        <div className="DemoReel">
           <Video onYoutube={true} videoUrl="https://www.youtube-nocookie.com/embed/wYV81jbFvkY" title="Raph's Demo Reel"/>
           {/* Description de mes compétences */}
        </div>
    );
}