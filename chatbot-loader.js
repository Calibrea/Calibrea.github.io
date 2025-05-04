// Chargement du HTML
fetch('chatbot.html')
  .then(res => res.text())
  .then(html => {
    const container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);
    
// Charger le JS du chatbot APRÈS avoir inséré le HTML
    const script = document.createElement('script');
    script.src = 'chatbot.js';
    document.body.appendChild(script);
  });
