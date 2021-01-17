import React, { useState } from 'react';
import NavBarTop from '../NavBar/NavBarTop';
import { ExampleComponent } from './ExampleComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import i18next from 'i18next';

function App() {

  const [language, setLanguage] = useState('en');

  const handleClick = e => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18next.changeLanguage(e.target.value);
  }

  const linkStyle = {
    textDecoration: 'underline'
  }

  return (
    <div id="content">
      {/* ----- THESE WILL ALL BE REACT-ROUTER NAVLINKS ----- */}
   
      <button value='arab' onClick={handleClick} style={linkStyle}>
        Arabic
     </button>
     <button value='en' onClick={handleClick}>
        English
      </button>
      <button value='es' onClick={handleClick}>
        Spanish
      </button>
      <button value='zh' onClick={handleClick}>
        Chinese
      </button>

      {/* ----- END NAVLINKS ----- */}

      <NavBarTop />

      <div style={{ margin: '0 auto', width: '100%'}}>
        <ExampleComponent 
          lang={language} />
      </div>

    </div>
  );
}

export default App;