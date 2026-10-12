import React from 'react';
import {
Navbar,
Nav,
Container,
Row,
Col,
Card,
Button
} from 'react-bootstrap';

function App() {
return (
<>
<div className="App">

    {/* Navigation bar */}
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          My React Project
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Heading */}
    <Container className="my-5" id="home">
      <h1 className="text-center mb-3">
        Welcome to My React Project
      </h1>

      <p className="text-center text-muted mb-5">
        Learning React with React-Bootstrap
      </p>

      {/* Three cards */}
      <Row>
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                Learn how to create websites using HTML, CSS
                and JavaScript.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>React Development</Card.Title>
              <Card.Text>
                Build interactive user interfaces using React
                components.
              </Card.Text>
              <Button variant="success">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Responsive Design</Card.Title>
              <Card.Text>
                Create layouts that work well on computers,
                tablets and mobile phones.
              </Card.Text>
              <Button variant="dark">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  </div>
</>

);
}

export default App;