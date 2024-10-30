function Image({ filename }) {

    filename = "/images/"+filename;
    return (
        <a href={filename} target="_blank"><img src={filename}/></a>
      );
  }
  
  export default Image;