import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form'

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {

        return (
            <section className="heading-section">
                <Container fluid>
                    <h1>Calendar</h1>
                    <Row>
                        <Col md={6}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlSelect2">
                                            <Form.Control as="select" size="lg">
                                                <option>13-19 April</option>
                                                <option>13-19 April</option>
                                                <option>10-25 June</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlSelect2">
                                            <Form.Control as="select" size="lg">
                                                <option>13-19 April</option>
                                                <option>13-19 April</option>
                                                <option>10-25 June</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <div className="color-definitions pull-right">
                                <ul className="no-list clearfix">
                                    <li className="success pull-left"></li>
                                    <li className="waiting pull-left"></li>
                                    <li className="no-show pull-left"></li>
                                    <li className="scheduled pull-left"></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}