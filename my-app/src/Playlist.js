import { useState } from "react"

function Playlist ({playlist, playlists, setPlaylists}) {

    const [showImage, setShowImage] = useState(true)

    function handleClick(){
        setShowImage(!showImage)
    }

    // REMOVE PLAYLIST 
    function handleDeletePlaylist (event) {
      event.stopPropagation()
      const filteredPlaylists = playlists.filter(p => p.id !== playlist.id)
      setPlaylists(filteredPlaylists)
    // })

  }

   // UPDATE LIKES
   function handleUpdateLikes(event) {
    event.stopPropagation()
    fetch (`http://localhost:3001/playlists/${playlist.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify ({ likes: playlist.likes + 1})
    })
    .then(res=>res.json())
    .then(updatedPlaylist => {
        const updatedPlaylists = playlists.map (playlist => {
            if(playlist.id !== updatedPlaylist.id) {
                return playlist
            } else {
                return updatedPlaylist
            }
        })
        setPlaylists ( updatedPlaylists )
    })
}  


    // Use optional chaining to access properties safely
    const imageUrl = playlist?.image_url;

    return (
        <div className="playlist-item" onClick={handleClick}>
            {
            // CONDITION
            showImage
            ?
            // TRUE VALUE
            <img src={imageUrl} alt={playlist.genre} />
            :
            // false value
            <>   
                <h1>{playlist.genre}</h1>
                {/* <ul>
                <h4>{Array.isArray(playlist.description) && playlist.description.map((description, index) => (
                <li className="list-item" key={index}>{description}</li>
                ))}</h4>
                </ul> */}
                <h2>"{playlist.vibe}"</h2>
                <h4>{playlist.description}</h4>
                <a href={playlist.link}><h4>{playlist.link}</h4></a>
                <button onClick={handleUpdateLikes}>{playlist.likes} Likes</button>
                <button onClick={ handleDeletePlaylist }>Remove</button>
            </>
            }
        </div>
  )

}

export default Playlist