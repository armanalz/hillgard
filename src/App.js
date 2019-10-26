import React from 'react';
import './resources/styles/style.css';
import Header from './components/Header';
import News from './components/News';
import Popular from './components/Popular';
import Footer from './components/Footer';


function App() {
  return (
    <div>

        <Header/>
        <News/>
        <Popular/>
        <Footer/>

    </div>
  );
}

export default App;
