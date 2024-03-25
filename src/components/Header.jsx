import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #00bfa5;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 24px;
`;

function Header() {
  return (
    <HeaderContainer>WhisperSphere</HeaderContainer>
  );
}

export default Header;
