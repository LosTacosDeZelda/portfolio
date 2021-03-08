import "../sass/Photo.scss";

export default function Photo(props) {
    
    const photoStyle = {
        backgroundImage: `url(img/${props.id}.png)`,
    };

    return(

        <div className='Photo' style={photoStyle}></div>
    );

    
}