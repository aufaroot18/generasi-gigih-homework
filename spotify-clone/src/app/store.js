/* 

steps:
1. Create store
2. Provide store in index.js
3. Membuat reducer
4. Mengimport reducer di store
5. Menggunaan useSelector untuk mengambil nilai dari store
5. Gunakan dispatch untuk melakukan aksi

*/

import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from '../store/playlist/playlist.slice';
import counterReducer from '../store/counter/counter.slice';
import gifReducer from '../store/gif/gif.slice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    gif: gifReducer,
    playlist: playlistReducer,
  }
});