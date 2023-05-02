import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    const footerStyle ={
        background: 'linear-gradient(to right, #2c3e50, #1a1a1a)',
        color: 'white',
        paddingTop: '2rem',
        paddingBottom: '2rem',
    }
    return (
        <footer className="mt-5" style={footerStyle} >
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2023 Chefs Table All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    );
};

export default Footer;