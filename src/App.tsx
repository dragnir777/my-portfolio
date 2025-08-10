import React from 'react';
import Projects from './components/Projects';

function App() {
  console.log('App component rendering - WITH PROJECTS COMPONENT');

  return (
    <div style={{
      padding: '20px', 
      backgroundColor: 'green', 
      color: 'white', 
      fontSize: '24px',
      minHeight: '100vh'
    }}>
      <h1>APP COMPONENT - AVEC COMPOSANT PROJECTS</h1>
      <p>Si vous voyez ceci, React fonctionne parfaitement !</p>
      
      {/* Composant Projects */}
      <Projects />
    </div>
  );
}

export default App;