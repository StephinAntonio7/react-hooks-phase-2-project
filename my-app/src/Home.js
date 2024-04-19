import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import {Link, useParams} from 'react-router-dom';
import { useEffect, useState } from "react";

function Home({changeVibes}) {
  return (
    <div>
      <NavBar />
      {/* <h1>What's the Vibes?</h1> */}
    <div className="home-page">Select your favorite playlist</div>

    {/* STRETCH GOALS */}
      {/* <button onClick={() => changeVibes("ALL")}> ALL </button>
      <button onClick={() => changeVibes("Chill")}> Chill </button>
      <button onClick={() => changeVibes("Fitness")}> Fitness </button>
      <button onClick={() => changeVibes("Party")}> Party </button>
      <button onClick={() => changeVibes("Dance")}> Dance </button> */}
    </div>
  );
}
  
export default Home