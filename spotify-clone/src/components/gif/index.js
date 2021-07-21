import React, { useState } from 'react';
import styles from './Gif.module.css';

/* CSS */
// import styles from './Gif.module.css';

// convert class to function
// setup usestate dan useeffect
// siapin state search dan data
// handle search dan click

function Card({ gif }) {
  return(
    <div className={styles.image}>
      <img src={gif.images.original.url} alt="gif" width="100" />
    </div>
  );
}

function Gif() {

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleClick = async () => {
    const link = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${search}&limit=10`;
    const result = await fetch(link);
    const gifs = await result.json();

    setData(gifs.data);
  }

  return(
    <div className={styles.gif}>
      <div>
        <input type="text" onChange={(e) => handleSearch(e)} className={styles.search} />
        <button onClick={handleClick} className={styles.button}>Search</button>
        <div className={styles.images}>
          {
            data.map(gif => <Card gif={gif} key={gif.id} />)
          }
        </div>
      </div>
    </div>
  );
}

export default Gif;