
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
      <Title>Моё Портфолио</Title>
      <Subtitle>Здесь вы можете найти мои проекты</Subtitle>
    </HeaderContainer>
  );
}

export default Header;