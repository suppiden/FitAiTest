import man from '../src/man1.png'
import React, { useState, useEffect, useRef } from 'react';




const messages = [
  { text: "¡Hola! ¿Cómo puedo ayudarte?", sender: "bot" },
  { text: "Quisiera saber más sobre la funcionalidad del chat.", sender: "user" },
  { text: "Claro, el chat te permite comunicarte en tiempo real.", sender: "bot" },
  { text: "¿Es fácil de usar?", sender: "user" },
  { text: "Sí, es muy intuitivo y fácil de usar.", sender: "bot" },
  { text: "¡Genial, gracias!", sender: "user" },
];

function Catch() {
  const [chatMessages, setChatMessages] = useState([]);
  const chatRef = useRef(null);

  const addMessageToChat = (message) => {
    setChatMessages(prevMessages => [...prevMessages, message]);
    // Desplazar hacia abajo después de actualizar el estado
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    let i = 0;
    const simulateChat = () => {
      if (i >= messages.length) {
        return;
      }
      
      // Nuevo mensaje que se va a añadir.
      const newMessage = messages[i];
      
      // Agrega el mensaje actual al chat.
      setChatMessages((prevMessages) => [...prevMessages, newMessage]);
      
      // Calcula el tiempo de espera para el próximo mensaje.
      const delay = newMessage.sender === 'bot' ? 2000 : 1000;
      
      // Programa el próximo mensaje.
      const timeoutId = setTimeout(simulateChat, delay);

      // Incrementa el índice para el próximo mensaje.
      i++;
      
      // Asegúrate de desplazar el chat hacia abajo.
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }

      // Retorna una función de limpieza para cancelar el timeout si el componente se desmonta.
      return () => clearTimeout(timeoutId);
    };

    // Inicia la simulación del chat.
    const timeoutId = setTimeout(simulateChat, 0);

    // Limpieza: cancela el timeout cuando el componente se desmonte.
    return () => clearTimeout(timeoutId);
  }, []);
  // bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded
  return (

    <div className="flex h-auto w-auto">
    <div className="side-home flex justify-between items-center bg-black text-white p-8 w-2/4">
    <div className="max-w-md">
      <h1 className="text-4xl font-bold mb-4">Welcoming <span className="text-gray-500">Per Training</span></h1>
      <p className="mb-6">Your catchy marketing text could go here to explain a bit more.</p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        SEPT SRAT
      </button>
    </div>
  </div>

  <div className="flex bg-green-500 h-full "></div>
  <div className='image1'>
    <img src={man} className='image'></img>
  </div>
  <div id="chatSimulation" ref={chatRef}>
  {chatMessages.map((message, index) => (
  <div key={index} className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}>
    {message.text}
  </div>
))}
      </div>
  </div>
  );
}

export default Catch;