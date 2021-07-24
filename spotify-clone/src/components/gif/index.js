/* Package */
import React, { useState } from 'react';

/* Components */
import SearchBar from './SearchBar';
import CardList from './CardList';

/* CSS */
import styles from './Gif.module.css';

function Gif() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleClick = async () => {
    setLoading(true);
    _fetchGifs();
    _addTimeOut(2000);
  }

  const _fetchGifs = async () => {
    const link = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${search}&limit=9`;
    const result = await fetch(link);
    const gifs = await result.json();
    setData(gifs.data);
  }

  const _addTimeOut = (time) => {
    setTimeout(() => {
      setLoading(false);
    }, time);
  }

  const _renderCardList = () => {
    return loading
    ? <div className={styles.loading}>Loading ...</div>
    : <CardList data={data} />
  }

  return(
    <div className={styles.gif}>
      <SearchBar handleSearch={handleSearch} handleClick={handleClick} />
      {
        _renderCardList()
      }
    </div>
  );
}

export default Gif;