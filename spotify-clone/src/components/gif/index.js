const Gif = (props) => {
  const { title, url } = props.gif;

  return(
    <div>
      <h2>Gif Component</h2>
      <form>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      <p>Title {title}</p>
      <img src={url} alt={title} />
    </div>
  );
};

export default Gif;