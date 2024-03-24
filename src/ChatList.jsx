import React from 'react';
import ChatListItem from './ChatListItem';
import styled from 'styled-components';

const ChatListContainer = styled.div`
  flex: 0.35;
  overflow: scroll;
`;

function ChatList() {
  // Dummy-Daten, später durch echte Daten ersetzen
  const chats = ['Chat 1', 'Chat 2', 'Chat 3'];

  return (
    <ChatListContainer>
      {chats.map((chat, index) => (
        <ChatListItem key={index} name={chat} />
      ))}
    </ChatListContainer>
  );
}

export default ChatList;
