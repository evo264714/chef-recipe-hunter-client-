import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftContent from '../pages/Home/LeftContent/LeftContent';
import RightContent from '../pages/Home/RightContent/RightContent';
import Home from '../pages/Home/Home/Home';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftContent></LeftContent>
                    </Col>
                    <Col lg={6}>
                        <h2>Main content here</h2>
                    </Col>
                    <Col lg={3}>

                        <RightContent></RightContent>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;