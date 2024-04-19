import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import PlaylistsContainer from './PlaylistsContainer';


function Favorites() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/playlists")
      .then(res => res.json())
      .then(playlistData => setPlaylists(playlistData))
      .catch(error => console.error('Error fetching playlists:', error));
  }, []);


  const favoritePlaylists = playlists.filter(playlist => playlist.likes > 0);

  return (
    <div className="App">
      <NavBar />
      <header></header>
        <div className="flex-container">
          <PlaylistsContainer playlists={favoritePlaylists} setPlaylists={setPlaylists} />
        </div>
      </div>
  );
}

export default Favorites;