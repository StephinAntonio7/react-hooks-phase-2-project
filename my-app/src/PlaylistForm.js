import { useState } from 'react'


function PlaylistForm ({ setPlaylists }) {

    const [formData, setFormData] = useState ({
    genre: '',
    description: '', 
    vibe: '',
    image_url: '',
    link: ''
    })

    function handleSubmit (event) {
        event.preventDefault()
        fetch('http://localhost:3001/playlists', {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
           body: JSON.stringify (formData)
           })
           .then(res=>res.json())
           .then(newPlaylistObj=> {
              setFormData({genre:'', 
              description:'', 
              vibe: '',
              image_url: '',
              likes: 0,
              Link: ''
            })
            setPlaylists(playlists =>[...playlists, newPlaylistObj])
        })
        .catch(error => console.error('Error creating playlist:', error));
    }

    
    return (
        <div className="NavLinks">
        <form onSubmit={handleSubmit} className="playlist-form">
           
            <h2>Create A New Playlist</h2>

            <label htmlFor="image_url">Cover Art: </label>
            <input name="image_url"
            value={formData.image_url}
            onChange={(event) => setFormData( {...formData, image_url: event.target.value} )}
            />
            
            <label htmlFor="genre"> Genre: </label>
            <input name="genre"
            value={formData.genre}
            onChange={(event) => setFormData( {...formData, genre: event.target.value} )}
            />
            
            <label htmlFor="description"> Song: </label>
            <input name="description"
            value={formData.description}
            onChange={(event) => setFormData( {...formData, description: event.target.value} )}
            />

            <label htmlFor="vibe">Vibe: </label>
            <input name="vibe"
            value={formData.vibe}
            onChange={(event) => setFormData( {...formData, vibe: event.target.value} )}
            />
        
        <input type="submit" value="Add Playlist" />
        
        </form>
        </div>
    )
}


  
export default PlaylistForm