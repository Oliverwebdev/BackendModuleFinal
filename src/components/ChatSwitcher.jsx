import React, { useState } from 'react';
import styled from 'styled-components';

// Vorhandene Styled Components...
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ChatAuswahlContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e5ddd5; /* Hintergrund der Chatliste ähnlich WhatsApp */
  width: 30%;
  overflow-y: auto;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

const ChatAnzeigeContainer = styled.div`
  padding: 20px;
  flex-grow: 1;
  overflow-y: auto;
  background-color: #d2d2d2; /* Hintergrund des Chatfensters ähnlich WhatsApp */
  @media (max-width: 768px) {
    border-top: 1px solid #ccc;
  }
`;

const ChatAuswahlButton = styled.button`
  padding: 15px 20px;
  border: none;
  background-color: #fff;
  text-align: left;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
  &:focus {
    outline: none;
    border-left: 3px solid #4CAF50; /* WhatsApp grün als Fokus */
  }
  @media (max-width: 768px) {
    padding: 10px;
    flex: 1;
    white-space: nowrap;
  }
`;

const NachrichtenForm = styled.form`
  display: flex;
  padding: 10px;
  background-color: #f0f0f0; /* Footer Hintergrund ähnlich WhatsApp */
`;

const NachrichtenInput = styled.input`
  flex-grow: 1;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 20px;
  margin-right: 10px;
`;

const SendenButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50; /* WhatsApp grün */
  border: none;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const ChatSwitcher = () => {
  // Definiere dummyChats innerhalb der Komponente
  const dummyChats = [
    { id: 1, name: 'Chat 1', content: 'Willkommen im Chat 1' },
    { id: 2, name: 'Chat 2', content: 'Willkommen im Chat 2' },
    // Füge bei Bedarf weitere Dummy-Chats hinzu
  ];

  const [aktuellerChat, setAktuellerChat] = useState(dummyChats[0]);
  const [nachricht, setNachricht] = useState('');

  const wechselChat = (chat) => {
    setAktuellerChat(chat);
  };

  const handleNachrichtenSenden = (e) => {
    e.preventDefault();
    // Logik zum Senden der Nachricht hier...
    console.log(nachricht);
    setNachricht(''); // Eingabefeld zurücksetzen
  };

  return (
    <Container>
      <ChatAuswahlContainer>
        {dummyChats.map((chat) => (
          <ChatAuswahlButton key={chat.id} onClick={() => wechselChat(chat)}>
            {chat.name}
          </ChatAuswahlButton>
        ))}
      </ChatAuswahlContainer>
      <ChatAnzeigeContainer>
        {aktuellerChat ? aktuellerChat.content : 'Bitte einen Chat auswählen.'}
        <NachrichtenForm onSubmit={handleNachrichtenSenden}>
          <NachrichtenInput 
            type="text" 
            placeholder="Nachricht schreiben..." 
            value={nachricht} 
            onChange={(e) => setNachricht(e.target.value)}
          />
          <SendenButton type="submit">Senden</SendenButton>
        </NachrichtenForm>
      </ChatAnzeigeContainer>
    </Container>
  );
};

export default ChatSwitcher;

