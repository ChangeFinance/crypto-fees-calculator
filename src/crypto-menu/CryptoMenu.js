import React, { Component } from 'react';

import { Row, Col } from 'react-materialize';

import cryptos from './cryptos.json';

class CryptoMenu extends Component {
  renderCrypto(crypto) {
    const slug = crypto.name.toLowerCase();

    return (
      <Col s={6} m={2} key={crypto.name}>
        <button className={`${slug} btn btn-floating`}>
          <img
            src={require(`./${slug}.png`)}
            alt={crypto.name}
            onClick={event => this.props.onSelectedCrypto(crypto)}
          />
        </button>
      </Col>
    );
  }

  render(props) {
    return (
      <Row className="cryptos">
        {cryptos.map(crypto => this.renderCrypto(crypto))}
      </Row>
    )
  }
}

export default CryptoMenu;
