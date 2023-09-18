function Home(props) {
    return (
      <div>
  
        <h1>Name: {props.home.name}</h1>
        <span>price: {props.home.price}</span>
      </div>
    );
  }
  export default Home;