import React from 'react';
import './App.css';
import Movie from './components/Movie';
import Translations from './utils/Translations';

function App() {
  return (
    <div className="App">
      <header>
        {Translations.appHeading}
      </header>
      <body>
          <Movie/>  
      </body>
    </div>
  );
}

export default App;
