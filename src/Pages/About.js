import React, {Component} from 'react';
import {Col, Container, Nav, Row, Tab} from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id = {'ledt-tabs-exemple'} defaultActiveKey = {'first'}>
                    <Row>
                        <Col sm = {3}>
                            <Nav variant = {'pills'} className = {'flex-column mt-2'}>
                                <Nav.Item>
                                    <Nav.Link eventKey = {'first'}>Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey = {'second'}>Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey = {'third'}>Programming</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm = {9}>
                            <Tab.Content className = {'mt-3'}>
                                <Tab.Pane eventKey = {'first'}>
                                    <img src={'https://www.adobe.com/content/dam/cc/us/en/products/illustrator/icon-design/desktop/SEO_single-app_icon-design_P1_819x413.jpg.img.jpg'}/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque expedita impedit laboriosam quos repellat.
                                        Eos, non, sint? Ab, accusantium amet beatae culpa dolorem nesciunt, perspiciatis,
                                        quasi repellat sed tempora tempore!
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey = {'second'}>
                                    <img src={'https://squalio.com/wp-content/uploads/2018/08/Teams.png'}/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque expedita impedit laboriosam quos repellat.
                                        Eos, non, sint? Ab, accusantium amet beatae culpa dolorem nesciunt, perspiciatis,
                                        quasi repellat sed tempora tempore!
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey = {'third'}>
                                    <img src={'https://cdn.datafloq.com/cache/blog_pictures/878x531/artificial-intelligence-future-of-programming.jpg'}/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque expedita impedit laboriosam quos repellat.
                                        Eos, non, sint? Ab, accusantium amet beatae culpa dolorem nesciunt, perspiciatis,
                                        quasi repellat sed tempora tempore!
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;