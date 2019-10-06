import React, { Component } from 'react';
import { Media, Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import firewood from './images/firewood.jpg'
import sun from './images/sun.jpg'
import moon from './images/moon.jpg'
import seawater from './images/seawater.jpg'
import forest from './images/forest.jpg'
import deepsea from './images/deepsea.jpg'

class App extends Component {
  render() {

    const imgStyle = {
      maxHeight: 512,
      maxWidth: 512
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Olá S3 Website!</h2>
        </div>
        <p className="App-intro">
          Site hospedado em <code>Bucket S3</code> em modo hosting static website.
        </p>
        <Container>
          <Row>
            <Col lg="12" md="12">
              <Media object src={ firewood } style={imgStyle} alt={ firewood } />
              <Media object src={ forest } style={imgStyle} alt={ forest } />
              <Media object src={ deepsea } style={imgStyle} alt={ deepsea } />
              <Media object src={ sun } style={imgStyle} alt={ sun } />
              <Media object src={ moon } style={imgStyle} alt={ moon } />
              <Media object src={ seawater } style={imgStyle} alt={ seawater } />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
