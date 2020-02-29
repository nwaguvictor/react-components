import React from 'react';
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import Form from './components/Form'
import './App.css';

function App() {
  return (
    <div className="App">
      <header >
        <Header className="headerSection" />
      </header>

      <main className="container">
        <SectionOne />
        <Form />
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
