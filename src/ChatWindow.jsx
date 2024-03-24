import React from 'react';
import MessageList from './MessageList';
import InputArea from './InputArea';
import styled from 'styled-components';

const ChatWindowContainer = styled.div`
  flex: 0.65;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

function ChatWindow() {
  return (
    <ChatWindowContainer>
      <MessageList />
      <InputArea />
    </ChatWindowContainer>
  );
}

export default ChatWindow;
