import React, { Component } from 'react';

import { Row } from 'react-materialize';

import Header from './Header';

import './Calculator.css';

import 'materialize-css/dist/css/materialize.min.css'

class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Row className="fees">
          <div class="row">
            <div class="currency input-field col s8 offset-s2">
              <input type="number" class="validate" value={this.amount} />
              <strong>BTC</strong>
            </div>
          </div>
        </Row>
      </div>
    );
  }
}

export default Calculator;
