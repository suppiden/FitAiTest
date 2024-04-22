const chatSimulation = document.getElementById('chatSimulation');

const messages = [
  { text: "¡Hola! ¿Cómo puedo ayudarte?", sender: "bot" },
  { text: "Quisiera saber más sobre la funcionalidad del chat.", sender: "user" },
  { text: "Claro, el chat te permite comunicarte en tiempo real.", sender: "bot" },
  { text: "¿Es fácil de usar?", sender: "user" },
  { text: "Sí, es muy intuitivo y fácil de usar.", sender: "bot" },
  { text: "¡Genial, gracias!", sender: "user" },
];

function simulateChat(i = 0) {
  if (i < messages.length) {
    const message = messages[i];

    // Si el mensaje es del usuario, mostrar el ícono de escribiendo antes.
    if (message.sender === 'user' && i > 0) { // Asegúrate de no hacerlo para el primer mensaje del bot
      const writingIndicator = document.createElement('div');
      writingIndicator.className = 'message writing';
      chatSimulation.appendChild(writingIndicator);
      chatSimulation.scrollTop = chatSimulation.scrollHeight; // Desplaza hacia abajo

      // Espera un poco antes de mostrar el mensaje del usuario
      setTimeout(() => {
        chatSimulation.removeChild(writingIndicator); // Quita el ícono de escribiendo

        addMessageToChat(message);
        setTimeout(() => simulateChat(i + 1), 2000); // Espera un poco más para el siguiente mensaje
      }, 1000); // Tiempo mostrando el ícono de escribiendo
    } else {
      addMessageToChat(message);
      setTimeout(() => simulateChat(i + 1), 2000); // Espera un poco más para el siguiente mensaje si es el bot
    }
  }
}

function addMessageToChat(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', message.sender);
  messageElement.textContent = message.text;
  chatSimulation.appendChild(messageElement);
  chatSimulation.scrollTop = chatSimulation.scrollHeight; // Desplaza hacia abajo
}

simulateChat();