import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Componnants/NavBar';
import AboutUs from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import  Home  from './Pages/Home/Home';
import MovieDetails from './Pages/Movie Details/MovieDetails';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';


function App() {
  const myTheme = useSelector((state)=>state.MyTheme.theme)
  return (
   <BrowserRouter>
    <div className={myTheme === "light" ? "text-dark bg-light" : " bg-dark"}>
      <NavBar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={Contact} />
      <Route path="/details/:id" component={MovieDetails} />
      </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;



