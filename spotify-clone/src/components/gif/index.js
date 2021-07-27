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

function Gif() {
  // state
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { query } = useSelector(state => state.gif);
  const dispatch = useDispatch();

  useEffect(() => {
    _fetchGifs();
  }, [query])

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleClick = async () => {
    dispatch(setQuery(input));
    setLoading(true);
    _fetchGifs();
    _addTimeOut(2000);
  }

  const _fetchGifs = async () => {
    const link = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${query}&limit=9`;
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
      <SearchBar handleInput={handleInput} handleClick={handleClick} />
      {
        _renderCardList()
      }
    </div>
  );
}

export default Gif;