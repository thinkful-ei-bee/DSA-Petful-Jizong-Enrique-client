import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import LandingPage from '../../Route/LandingPage/LandingPage'
import catAdopt from '../../Route/Cat/catAdopt'
import dogAdopt from '../../Route/Dog/dogAdopt'
import Header from '../Header/header'


function App() { 
  return (
    <div className="App">      
       <Header />      
      <div>
      <Switch>
        <Route 
          exact
          path={'/'}
          component={LandingPage}
        />
         <Route 
          exact
          path={'/dog'}
          component={dogAdopt}
        />
         <Route 
          exact
          path={'/cat'}
          component={catAdopt}
        />
      </Switch>  
    </div>
    <div>      
  </div>
</div>
  );
}

export default App;
