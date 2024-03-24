import React from "react";
import styled, { css } from "styled-components";

const ChatListItemContainer = styled.div`
  padding: 20px;
  cursor: pointer;
  background-color: #ffffff; // Standard Hintergrundfarbe
  ${props => props.isActive && css`
    background-color: #ebebeb; // Farbe für aktiven Chat
  `}
  &:hover {
    background-color: #f5f5f5; // Hover-Farbe
  }
`;

function ChatListItem({ name, onSelect, isActive }) {
  return (
    <ChatListItemContainer isActive={isActive} onClick={onSelect}>
      {name}
    </ChatListItemContainer>
  );
}

export default ChatListItem;
