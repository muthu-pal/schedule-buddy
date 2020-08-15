import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './fonts/Poligon-Family/Poligon Medium.otf'
import './fonts/Poligon-Family/Poligon Light.otf'
import Home from './components/Home.js';
import OptionsPage from './components/OptionsPage.js';
import SearchByClass from './components/SearchByClass.js';
import SearchByYear from './components/SearchByYear.js';
import Error from './components/Error.js';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div>
      
      
          
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/options" component={OptionsPage}/>
             <Route path="/searchbyclass" component={SearchByClass}/>
             <Route path="/searchbyyear" component={SearchByYear}/>
            <Route component={Error}/>
           </Switch>
      
      





    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
