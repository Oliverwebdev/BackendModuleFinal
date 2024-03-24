import React from 'react';
import styled from 'styled-components';

const ChatListItemContainer = styled.div`
  padding: 20px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

function ChatListItem({ name }) {
  return (
    <ChatListItemContainer>
      {name}
    </ChatListItemContainer>
  );
}

export default ChatListItem;
