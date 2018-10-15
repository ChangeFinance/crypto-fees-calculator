import React, { Component } from 'react';

import { Row, Col, Input } from 'react-materialize';

import Header from './Header';

import 'materialize-css/dist/css/materialize.min.css'

class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Row>
          <Input placeholder="Placeholder" s={6} label="First Name" />
        </Row>
      </div>
    );
  }
}

export default Calculator;
