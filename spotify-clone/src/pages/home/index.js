const Home = () => {
  const sourceImg = "https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif";

  return(
    <div>
      <h2>Home Component</h2>
      <form>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      <img src={sourceImg} alt="giphy" />
    </div>
  );
};

export default Home;