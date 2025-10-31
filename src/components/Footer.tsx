import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Icon from "./ui/Icon";

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5">
            <Container>
                <Row className="mb-4">
                    {/* О бренде */}
                    <Col md={4}>
                        <h5 className="fw-bold">Nouveau</h5>
                        <p>Luxury fashion shop delivering exclusive pieces since 2025. Explore our collection and stay inspired.</p>
                    </Col>

                    {/* Навигация */}
                    <Col md={2}>
                        <h6 className="fw-semibold">Explore</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">New Arrivals</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Collections</a></li>
                            <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
                        </ul>
                    </Col>

                    {/* Социальные сети */}
                    <Col md={3}>
                        <h6 className="fw-semibold">Follow Us</h6>
                        <div className="d-flex gap-3">
                            <Icon iconName="twitter-x" />
                            <Icon iconName="instagram" />
                            <Icon iconName="threads" />
                        </div>
                    </Col>

                    {/* Подписка на новости */}
                    <Col md={3}>
                        <h6 className="fw-semibold">Newsletter</h6>
                        <Form>
                            <Form.Group className="mb-2" controlId="formEmail">
                                <Form.Control type="email" placeholder="Your email" />
                                <Button variant="light" type="submit">Subscribe</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row className="pt-3 border-top border-secondary">
                    <Col className="text-center">
                        <p className="m-0">Nouveau © 2025. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
