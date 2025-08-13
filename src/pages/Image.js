function Image(props) {

    var fileName = "/images/"+props.filename;
    if(props.placeholder == "true")
    {
        return (
            <div class="container">
                <a href={fileName} target="_blank"><img src={fileName}/>
                    <div class="overlay">
                        <div class="overlayText">AI Placeholder</div>
                    </div>
                </a>
            </div>
        );
    } else {
        return (
            <a href={fileName} target="_blank"><img src={fileName}/></a>
        );
    }
  }
  
  export default Image;