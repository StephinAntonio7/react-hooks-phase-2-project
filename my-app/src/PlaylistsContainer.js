import Playlist from "./Playlist";

function PlaylistsContainer({ playlists, setPlaylists }) {
  if (!playlists || playlists.length === 0) {
    return <div>No playlists available</div>;
  }

  const mappedPlaylists = playlists.map((playlist) => (
    <div key={playlist.id}> 
      <Playlist playlist={playlist} setPlaylists={setPlaylists} playlists={playlists}/>
    </div>
  ));

  return <>{mappedPlaylists}</>; {/* Returning the mapped playlists */}
}

export default PlaylistsContainer;