import React from "react"
import { Col, Container, Row, Form, Button } from "react-bootstrap"

const Footer = () => {
    return (
        <Container
            className=""
        >
            <Row>
                <Col
                    xs={12}
                    md={4}
                >
                </Col>
                <Col
                    xs={12}
                    md={4}
                >
                </Col>
                <Col
                    xs={12}
                    md={4}
                >
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
