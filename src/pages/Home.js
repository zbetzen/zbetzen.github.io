import Image from "./Image"

const Home = () => {
    return (
      <div class="bodyElement">
        <h1>Home</h1>
        <Image filename="Map.png" />
        <Image filename="FloodedCity.png" placeholder="true"/>
      </div>
    );
  };
  
  export default Home;