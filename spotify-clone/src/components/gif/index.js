import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../../store/gif/gif.slice';
import SearchBar from './SearchBar';
import CardList from './CardList';
import styles from './Gif.module.css';

function Gif({ trending }) {
  // state
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { query } = useSelector((state) => state.gif);
  const dispatch = useDispatch();

  const getUrl = () => {
    if (trending) {
      return `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=9`;
    }

    return `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${query}&limit=9`;
  };

  const fetchGifs = async () => {
    setLoading(true);

    const link = getUrl();
    const result = await fetch(link);
    const gifs = await result.json();
    setData(gifs.data);

    setLoading(false);
  };

  useEffect(() => {
    if (trending) {
      setData([]);
      fetchGifs();
    } else {
      setData([]);
      fetchGifs();
    }
  }, [query, trending]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleClick = async () => {
    dispatch(setQuery(input));
    fetchGifs();
  };

  const renderCardList = () => (loading
    ? <div className={styles.loading}>Loading ...</div>
    : <CardList data={data} />);

  return (
    <div className={styles.gif}>
      {
        trending ? null : <SearchBar handleInput={handleInput} handleClick={handleClick} />
      }
      {
        renderCardList()
      }
    </div>
  );
}

export default Gif;
