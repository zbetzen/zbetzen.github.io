function Image({ filename }) {

    filename = "/images/"+filename;
    return (
        <img src={filename}/>
      );
  }
  
  export default Image;