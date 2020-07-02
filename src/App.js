import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from "./store";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Link} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import Home from "./screens/Home";


class App extends React.Component{

 render() {
  return (
    <Provider store={store}>
      <BrowserRouter>
    <div className="grid-container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="50px"height="50px"/>
         
        <Link to="/">sHoPcLuB.com </Link>
        <Link to="/admin">Admin</Link>
        
      </header>

            <main>
              <Route path="/" exact component={Home}/>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/HomeScreen" component={HomeScreen} />
              
            </main>



      <footer>All right is reserved</footer>
      
    </div>
     </BrowserRouter>
    </Provider>
  );
}
}

export default App;
