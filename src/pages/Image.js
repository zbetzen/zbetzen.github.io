function Image(props) {

    var thumbnail = "/images/"+props.filename+".jpg";
    var mainImage = "/images/"+props.filename+".png";
    if(props.placeholder == "true")
    {
        return (
            <div class="container">
                <a href={mainImage} target="_blank"><img src={thumbnail}/>
                    <div class="overlay">
                        <div class="overlayText">AI Placeholder</div>
                    </div>
                </a>
            </div>
        );
    } else {
        return (
            <a href={mainImage} target="_blank"><img src={thumbnail}/></a>
        );
    }
  }
  
  export default Image;