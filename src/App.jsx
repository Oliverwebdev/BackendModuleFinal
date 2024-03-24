import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import ChatWindow from './ChatWindow';
import ChatList from './ChatList';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const BodyContainer = styled.div`
  display: flex;
  flex: 1;
`;

function App() {
  const [activeChat, setActiveChat] = useState(null);

  const selectChat = (chat) => {
    setActiveChat(chat);
  };

  return (
    <AppContainer>
      <Header />
      <BodyContainer>
        <ChatList selectChat={selectChat} />
        {activeChat ? <ChatWindow chat={activeChat} /> : <NoChatSelected>Nachricht auswählen</NoChatSelected>}
      </BodyContainer>
    </AppContainer>
  );
}

const NoChatSelected = styled.div`
  flex: 0.65;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  font-size: 24px;
  color: #525252;
`;

export default App;
