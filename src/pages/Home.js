import Image from "./Image"

const Home = () => {
    return (
      <div class="bodyElement">
        <h1>Home</h1>
        <p>
          <Image filename="Map" />
        </p>
        <p>
          <Image filename="FloodedCity" placeholder="true"/>
        </p>
      </div>
    );
  };
  
  export default Home;