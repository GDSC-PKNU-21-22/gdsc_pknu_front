import React from 'react';
import styled from 'styled-components';

const StyledTeamText = styled.p`
position: absolute;
width: 110px;
height: 25px;
left: 1166px;
top: 62px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
text-align: center;
color: #575757;
`;

const HeaderTeam = () => {
  return (
    <React.StrictMode>
      <StyledTeamText>Team</StyledTeamText>
    </React.StrictMode>
  );
}

export default HeaderTeam;
