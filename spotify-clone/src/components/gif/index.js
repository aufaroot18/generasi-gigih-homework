/* eslint-disable react-hooks/exhaustive-deps */
/* Package */
import React, { useEffect, useState } from 'react';

/* Slice */
import { setQuery } from '../../store/gif/gif.slice';

/* Components */
import SearchBar from './SearchBar';
import CardList from './CardList';

/* CSS */
import styles from './Gif.module.css';
import { useDispatch, useSelector } from 'react-redux';

function Gif({ trending }) {
  // state
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { query } = useSelector(state => state.gif);
  const dispatch = useDispatch();

  useEffect(() => {
    if (trending) {
      console.log('trending');
      setData([]);
      _fetchGifs();
    }
    else {
      console.log('search');
      setData([]);
      _fetchGifs();
    }
  }, [query, trending]);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleClick = async () => {
    dispatch(setQuery(input));
    _fetchGifs();
  }

  const getUrl = () => {
    if (trending) {
      return `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=9`;
    }

    return `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${query}&limit=9`;
  }

  const _fetchGifs = async () => {
    setLoading(true);

    const link = getUrl();
    const result = await fetch(link);
    const gifs = await result.json();
    setData(gifs.data);

    setLoading(false);
  }

  /* const _addTimeOut = (time) => {
    setTimeout(() => {
      setLoading(false);
    }, time);
  } */

  const _renderCardList = () => {
    return loading
    ? <div className={styles.loading}>Loading ...</div>
    : <CardList data={data} />
  }

  return(
    <div className={styles.gif}>
      {
        trending ? null : <SearchBar handleInput={handleInput} handleClick={handleClick} />
      }
      {
        _renderCardList()
      }
    </div>
  );
}

export default Gif;