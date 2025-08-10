console.log('main.js loading...');

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, executing main.js...');
  
  // Test simple sans React
  const rootElement = document.getElementById('root');
  console.log('Root element:', rootElement);

  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; background-color: blue; color: white; font-size: 24px;">
        <h1>MAIN.JS - TEST SIMPLE</h1>
        <p>Si vous voyez ceci, JavaScript fonctionne !</p>
        <div id="projects" style="padding: 20px; background-color: red; color: white; margin-top: 20px;">
          <h2>SECTION PROJETS - TEST JS</h2>
          <p>Section projets en JavaScript pur</p>
        </div>
      </div>
    `;
    console.log('Content inserted successfully');
  } else {
    console.error('Root element not found!');
  }
});

// Test immédiat aussi
console.log('main.js executed immediately');