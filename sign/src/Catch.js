import man from '../src/man1.png';
import React, { useState, useEffect, useRef } from 'react';
import './index.css';

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
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [isWriting, setIsWriting] = useState(false);
  const chatRef = useRef(null);

  const startChat = () => {
    setIsChatStarted(true);
  };

  const addMessageToChat = (message) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (isChatStarted) {
      let i = 0;

      const simulateChat = () => {
        if (i >= messages.length) {
          setIsWriting(false);
          return;
        }

        const newMessage = messages[i];
        const isBot = newMessage.sender === "bot";
        const delay = isBot ? 2000 : 1000;

        if (isBot) {
          setIsWriting(true);
          setTimeout(() => {
            setIsWriting(false);
            addMessageToChat(newMessage);
            setTimeout(simulateChat, delay);
            i++;
          }, 1000); // Delay para el indicador de escritura
        } else {
          addMessageToChat(newMessage);
          setTimeout(simulateChat, delay);
          i++;
        }
      };

      simulateChat();
    }
  }, [isChatStarted]);

  return (
    <div className="flex h-auto w-auto">
      <div className="side-home flex justify-between items-center bg-black text-white p-8 w-2/4">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4">
            Welcoming <span className="text-gray-500">Per Training</span>
          </h1>
          <p className="mb-6">
            Your catchy marketing text could go here to explain a bit more.
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={startChat}
          >
            Start Now
          </button>
        </div>
      </div>
      <div className="flex bg-green-500 h-full"></div>
      <div className="image1">
        <img src={man} className="image" alt="Man illustration" />
      </div>
      <div
        id="chatSimulation"
        ref={chatRef}
        className={`relative ${isChatStarted ? '' : 'blurred'}`}
      >
        {!isChatStarted && (
          <div className="overlay flex items-center justify-center"></div>
        )}
        {chatMessages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
          >
            {message.text}
          </div>
        ))}
        {isWriting && (
          <div className="message bot writing">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        )}
        <div className="fake-input-bar">
          <input
            type="text"
            placeholder="Type your message..."
            className="fake-input"
            disabled
          />
          <button className="fake-send-button" disabled>
            Send
          </button>
        </div>
      </div>
      {!isChatStarted && (
        <button
          className="overlay-button bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
          onClick={startChat}
        >
          Start Chat
        </button>
      )}
    </div>
  );
}

export default Catch;
