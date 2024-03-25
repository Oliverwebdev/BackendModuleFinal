import React from "react";
import styled, { css } from "styled-components";

const ChatListItemContainer = styled.div`
  padding: 20px;
  cursor: pointer;
  background-color: #ffffff; // Standard Hintergrundfarbe
  ${props => props.isactive && css`
    background-color: #ebebeb; // Farbe für aktiven Chat
  `}
  &:hover {
    background-color: #f5f5f5; // Hover-Farbe
  }
`;

function ChatListItem({ name, onSelect, isactive }) {
  return (
    <ChatListItemContainer isactive={isactive} onClick={onSelect}>
      {name}
    </ChatListItemContainer>
  );
}

export default ChatListItem;
