import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  
  const divStyle = {
    backgroundImage: 'url("https://techlog360.com/wp-content/uploads/2019/09/Different-chatting-apps.jpg")',
    backgroundSize: 'contain',
    backgroundPosition: 'initial',
    height: '300px', // Set the height of the image container
  };

  return (
    <div>
      <Header />
      <Container className="my-5">
        <Row className="mb-4">
          <Col style={divStyle}>
            {/* Content within the Col, if any */}
          </Col>
        </Row>
        {/* Other content */}
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
