function toggleChat() 
    {
    const window = document.getElementById("chatbot-window");
        if (window) 
            {
            window.style.display = window.style.display === "none" ? "block" : "none";
            }
    }
  
function addMessage(sender, message) 
    {
    const container = document.getElementById('chatbot-content');
    const msg = document.createElement('p');
    msg.className = sender === 'user' ? 'nes-balloon from-right is-primary' : 'nes-balloon from-left is-dark';
    msg.innerHTML = message;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
    }
  
function handleUserInput() 
    {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    if (message === '') return;
  
    addMessage('user', message);
    input.value = '';
  
    setTimeout(() => {
      const response = getBotResponse(message);
      addMessage('bot', response);
    }, 500);
    }
  
function getBotResponse(message) 
    {
    const m = message.toLowerCase();
    if (m.includes('bonjour')) return 'Bonjour ! que puis-je faire pour vous ?';
    if (m.includes('email')) return 'Vous pouvez utiliser le formulaire contact pour ça.';
    if (m.includes('projet')) return 'Pour en savoir plus sur mes projets clique sur le volet "projets" dans la barre de navigation';
    if (m.includes('aide')) return 'Je suis là pour ça !';
    if (m.includes('merci')) return 'de rien avec plaisir';
    if (m.includes('coin')) return `Coin !
                                    <br>
                                    <img src="https://cdn.discordapp.com/attachments/1145692860025425961/1362057537179877426/dancing-duck-karlo.gif?ex=6801026e&is=67ffb0ee&hm=465d0c9bc31a262738ff974c5f3e97830a2c779b55a148b0265c755b03232cc8&"
                                    width="50"
                                    style="vertical-align: middle;">`;
    if (m.includes('grenouille')) return `Kroâ kroâ kroââââââ 
                                    <br>
                                    <img src="https://cdn.discordapp.com/attachments/1145692860025425961/1362059006943822035/iwqV9mX0NYc0.gif?ex=680103cd&is=67ffb24d&hm=797a82fecc2aa3dc708a444900b60a1e9f8f4e60122931815ecea75ccd55917c&"
                                    width="50"
                                    style="vertical-align: middle;">`;
    return `Je ne sais pas. 
            <br>
            Tiens! Voila un Cookie 
            <br>
            <img src="https://cdn.discordapp.com/attachments/1145692860025425961/1362033574420939022/208-2080448_minecraft-cookie-icon-minecraft-cookie.png?ex=6800ec1d&is=67ff9a9d&hm=7e8761ccf70b060ffb8283bb356b1221cfa087cc14361ea5b64503d58b1727a1&" 
            width="50" 
            style="vertical-align: middle;">`;
    }
  