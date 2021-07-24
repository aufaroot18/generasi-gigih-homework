/* Package */
import { useState } from "react";

/* Components */
import Track from "../track";
import Form from "./Form";

/* Styles */
import styles from './Playlist.module.css';

const Playlist = () => {
  const [uris, setUris] = useState([]);
  const [token, setToken] = useState(null);
  const [isSearched, setIsSearched] = useState(false);

  return(
    <div className={styles.container}>
      {
        isSearched && <Form token={token} uris={uris} />
      }
      <Track uris={uris} setUris={setUris} token={token} setToken={setToken} setIsSearched={setIsSearched} />
    </div>
  );
};

export default Playlist;