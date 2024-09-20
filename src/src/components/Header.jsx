
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>My Portfolio</Title>
      <Subtitle>here you can see some of my projects</Subtitle>
    </HeaderContainer>
  );
}

export default Header;