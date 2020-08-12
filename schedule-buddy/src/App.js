import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyHeader from './components/myHeader.js';
import MyFooter from './components/myFooter.js';
import MiddleContainer from './components/middleContainer.js';
import './components/myHeader.css'
import './components/myFooter.css'
import './components/middleContainer.js'
import './fonts/Poligon-Family/Poligon Medium.otf'
import './fonts/Poligon-Family/Poligon Light.otf'

function App() {
  return (
    <div className="App">
      
      {/* <Container>
        <Row> */}
          <MyHeader />
        {/* </Row>
        <Row> */}
        <MiddleContainer />
        {/* </Row> */}
        <MyFooter />
      {/* </Container> */}






    </div>
  );
}

export default App;
