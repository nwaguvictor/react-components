import React from 'react';
import Navbar from './components/headers/Navbar'
import Title from './components/headers/Title'
import Sidebar from './components/main/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Title title="Bill & Bail Attornies"/>
        <Navbar />
      </header>

      <main>
        <Sidebar />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
