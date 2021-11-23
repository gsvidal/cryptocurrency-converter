import styled from '@emotion/styled';
// import image from './cryptocurrencies.jpg';
import Form from './components/Form';

const Container = styled.div`
  max-width: 1200px;
  min-height: 800px;
  height: 100vh;
  margin: 0 auto;
  padding: 180px 20px;
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  font-weight: 700;
  font-size: 50px;
  
  @media (min-width: 465px) {
    &::after {
    content: "";
    width: 135px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    }
  }
`;

function App() {
  return (
    <Container>
      <Heading>
        Convert Cryptocurrencies
      </Heading>
      <Form>

      </Form>
    </Container>
  );
}

export default App;
