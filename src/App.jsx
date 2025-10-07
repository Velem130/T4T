import React from 'react';
// 1. Import the Navbar component using its relative path
import Navbar from './components/Navbar'; 

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <main className="p-8">
        <h1 className='text-red-400'>Application Main Content</h1>
        <p>This content will appear below the navigation bar.</p>
      </main>
      
    </div>
  );
}

export default App;

