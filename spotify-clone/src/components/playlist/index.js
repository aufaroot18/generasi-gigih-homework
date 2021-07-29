/* Package */
import { useState } from "react";

/* Components */
import Track from "../track";
import Form from "./Form";

/* Styles */
import styles from './Playlist.module.css';

function Playlist() {
  const [uris, setUris] = useState([]);
  const [token] = useState(null);
  const [isSearched, setIsSearched] = useState(false);

  return(
    <div className={styles.container}>
      {
        isSearched && <Form token={token} uris={uris} />
      }
      <Track uris={uris} setUris={setUris} setIsSearched={setIsSearched} />
    </div>
  );
};

export default Playlist;