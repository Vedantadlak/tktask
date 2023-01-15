import React from 'react';
import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Register from './Register'
import Login from './Login';
function App() {
  return (
    <div className="App">
     <h1>BUY&SELL</h1>

     <div className="row">

      <div className="col-md-6">

        <Register/>
          <div className="col-md-6">
            <Login/>
            </div>

      </div>
     </div>
    </div>
  );
}

export default App;
