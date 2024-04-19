import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function About() {
  return (
    <div>
      <NavBar />
      {/* <h1>What's the Vibes?</h1> */}
    <div className="home-page"> This website allows you to see the current top 10 songs from each music genre and go directly to the selected playlist via SoundCloud. Users can also add/remove playlists as they choose. Liked playlist will populate in the favorites section.</div>

    </div>
  );
}

export default About