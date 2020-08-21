import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import MyHeader from './myHeader.js';
import MyFooter from './myFooter.js';
import MiddleContainer from './middleContainer.js';
import './myHeader.css'
import './myFooter.css'
import './middleContainer.css'


const Home = () => {
    return (
        <div>
          
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

export default Home