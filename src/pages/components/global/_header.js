import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../../../assets/images/logo.jpg'
import '../../../assets/sass/header.scss'
import profileImage from '../../../assets/images/doctor.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {

        return (
            <header id="header">
                <Container fluid>
                    <Row className={'flex-center'}>
                        <Col md={4}>
                            <div id="logo"><img src={logo} alt=""/></div>
                        </Col>
                        <Col md={4}>
                            <nav id={'main-nav'}>
                                <ul className="no-list flexbox flex-center jc-center">
                                    <li><NavLink to={'/'}>Calendar</NavLink></li>
                                    <li><NavLink to={'/patients'}>Patients</NavLink></li>
                                    <li><NavLink to={'/chat'}>Chat</NavLink></li>
                                </ul>
                            </nav>
                        </Col>
                        <Col md={4}>
                            <div className="profile-right-menu-wrap">
                                <div className="basic-info flexbox flex-center jc-right">
                                    <div className="thumb small">
                                        <img src={profileImage} alt=""/>
                                    </div>
                                    <div className="profile-info">
                                        <div className="title">
                                            <small className="designation dp-block lightergray">Doctor</small>
                                            <span className="doctor-name bold f17 ">Jenny Williason </span>
                                        </div>
                                        <div className="fill-bc1-light fa-icon flexbox flex-center jc-center"><FontAwesomeIcon icon={faChevronDown} /></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}