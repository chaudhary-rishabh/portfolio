import React from 'react'
import { Col, Container, Row, Nav,Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';

import projImg1 from '../images/projImg1.png'
import projImg3 from '../images/projImg3.png'
import projImg4 from '../images/projImg4.png'
import projImg5 from '../images/projImg5.png'
import projImg6 from '../images/projImg6.png'
import projImg7 from '../images/projImg7.PNG'
import projImg8 from '../images/projImg8.png'
import projImg9 from '../images/projImg9.png'

export const Projects = () => {
    const projects = [
        {
            title: "Social Media Website",
            description: "Built Social Media Website clone using Reactjs",
            imgUrl: projImg1,
            url:'https://soulgiannis.github.io/find'
        },
        {
            title: "Immigration Management System",
            description: "Full stack crud website using JSP, Servlet",
            imgUrl: projImg4,
            url:'https://github.com/SoulGiannis/SoulGiannis.github.io'
        },
        {
            title: "Portfolio Website",
            description: "Responsive Portfolio website using Reactjs",
            imgUrl: projImg3,
            url: '#'
        },
        {
            title: "Responsive Webpages",
            description: "Built responsive webpages using html, css and javascript",
            imgUrl: projImg5,
            url:'https://soulgiannis.github.io/login'
        },
        {
            title: "Crime Management System",
            description: "Crud Website using Jsp Servlet",
            imgUrl: projImg8,
            url:'https://github.com/SoulGiannis/crimemangae.github.io'
        },
    ];
  
    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>                        
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Websites</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Web Pages</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Other</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            webPages.map((webPage, index) => {
                                                return (
                                                    <ProjectCard key={index} {...webPage} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            others.map((other, index) => {
                                                return <ProjectCard key={index} {...other}/>
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content> 
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={''} alt="backgroundimage right"></img>
        </section>
    )
};
