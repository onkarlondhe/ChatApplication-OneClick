import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Message = () => {
  const messages = [
    { text: 'Hello there!', sender: 'received', time: '10:00 AM' },
    { text: 'Hi! How can I help you?', sender: 'sent', time: '10:05 AM' },
    // Add more messages here
  ];

  const renderMessages = () => {
    return messages.map((msg, index) => (
      <div key={index} className={`message ${msg.sender}`}>
        <div className="message-content">
          <p>{msg.text}</p>
          <span className="message-time">{msg.time}</span>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <Header />
      <Container className="my-5">
        <Row className="mb-4">
          <Col>
            <div className="chat-container">
              {renderMessages()}
              {/* Add a form for sending new messages */}
              <Form className="mt-3">
                <Form.Group controlId="messageInput">
                  <Form.Control type="text" placeholder="Type your message..." />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
        {/* Other content */}
      </Container>
      <Footer />
    </div>
  );
};

export default Message;
