import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";

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
        <ChatWindow chat={activeChat} />
      </BodyContainer>
    </AppContainer>
  );
}

export default App;
