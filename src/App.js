import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import main from './containers/main';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route component={main} />
      </BrowserRouter>
    </div>
  );
}

export default App;
