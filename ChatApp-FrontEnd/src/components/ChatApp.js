import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({ content: '', sender: '' });

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/oneclick/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    try {
      await axios.post('/oneclick/messages', newMessage);
      setNewMessage({ content: '', sender: '' });
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h1>Chat Application</h1>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <p>Sender: {message.sender}</p>
            <p>Content: {message.content}</p>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your message"
          value={newMessage.content}
          onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter your name"
          value={newMessage.sender}
          onChange={(e) => setNewMessage({ ...newMessage, sender: e.target.value })}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
