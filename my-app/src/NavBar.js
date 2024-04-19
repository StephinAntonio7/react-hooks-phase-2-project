import { Link } from 'react-router-dom'

function NavBar() {

    return (
    <div className="NavLinks">
        <h4> 
        <Link to="/">Home</Link>
        &nbsp; &nbsp;
        <Link to="/create">Create A Playlist</Link>
        &nbsp; &nbsp;
        <Link to="/favorites">Favorites</Link>
        &nbsp; &nbsp;
        <Link to="/about">About</Link>
        </h4>
    </div>
    )
  }
  
  export default NavBar;