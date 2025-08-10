import React from 'react';

function App() {
  console.log('App component rendering - CLEAN VERSION');

  return (
    <div style={{
      padding: '20px', 
      backgroundColor: 'green', 
      color: 'white', 
      fontSize: '24px',
      minHeight: '100vh'
    }}>
      <h1>APP COMPONENT - VERSION PROPRE</h1>
      <p>Si vous voyez ceci, React fonctionne parfaitement !</p>
      
      <div id="projects" style={{
        padding: '20px', 
        backgroundColor: 'red', 
        color: 'white', 
        marginTop: '20px',
        borderRadius: '8px'
      }}>
        <h2>SECTION PROJETS - VERSION PROPRE</h2>
        <p>Section projets maintenant visible !</p>
        <ul style={{textAlign: 'left', marginTop: '10px'}}>
          <li>Projet 1: Application Web</li>
          <li>Projet 2: API Backend</li>
          <li>Projet 3: Mobile App</li>
        </ul>
      </div>
    </div>
  );
}

export default App;