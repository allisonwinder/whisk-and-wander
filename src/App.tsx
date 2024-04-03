import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Breadcrumbs from './components/Breadcrumbs';
import Body from './components/Body';

function App() {
  return (
    <main>
      <Header/>
      <Breadcrumbs/>
      <Navigation/>
      <Body/>
    </main>
  );
}

export default App;
