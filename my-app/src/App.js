import './App.css';
import { useState, useEffect } from 'react';
import PlaylistsContainer from "./PlaylistsContainer";
import PlaylistForm from './PlaylistForm';
import NavBar from './NavBar';
import Home from './Home';

function App() {
  const [playlists, setPlaylists] = useState([]);
  const [vibes, setVibes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/playlists")
      .then(res => res.json())
      .then(playlistData => {
        setPlaylists(playlistData);
        setVibes(playlistData.map(playlist => playlist.vibe))
      });
  }, []);

  const favoritePlaylists = playlists.filter(playlist => playlists.likes > 0);

  // function changeVibes (mood) {
  //   if (mood === "ALL") {
  //     setVibes(vibes);
  //   } else {
  //     setVibes(vibes.filter(vibe => vibe.mood === mood));
  //   }
  // };

  return (
    <div className="App">
      <NavBar />
      <header></header>
      <div className="grid with-sidebar">
        <div className="flex-container">
          <PlaylistsContainer playlists={playlists} setPlaylists={setPlaylists} />
        </div>

        <div className="sidebar">
          {/* <Home changeVibes = {changeVibes} /> */}
          <PlaylistForm setPlaylists={setPlaylists} />
          {/* <ul>
            {vibes.map((vibe, index) => (
              <li key={index}>{vibe}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default App;