import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import Home from './Home';
import PlaylistsContainer from './PlaylistsContainer';
import Favorites from './Favorites'
import About from './About'


const routes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/create",
    element: <App />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/about",
    element: <About />,
  },
]

const router = createBrowserRouter (routes)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
