import React from 'react';

function App() {
  console.log('App.jsx rendering');
  
  return (
    <div style={{padding: '20px', backgroundColor: 'green', color: 'white', fontSize: '24px'}}>
      <h1>APP JSX - TEST SIMPLE</h1>
      <p>Si vous voyez ceci, React JSX fonctionne !</p>
      <div id="projects" style={{padding: '20px', backgroundColor: 'red', color: 'white', marginTop: '20px'}}>
        <h2>SECTION PROJETS - TEST JSX</h2>
        <p>Section projets en JSX</p>
      </div>
    </div>
  );
}

export default App;