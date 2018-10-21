import React, { Component } from 'react';

import { Row, Col } from 'react-materialize';

import cryptos from './cryptos.json';

class CryptoMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : props.selected
    };
  }

  selectCrypto(crypto) {
    this.setState({
      selected : crypto.ticker
    });

    this.props.onSelectedCrypto(crypto);
  }

  renderCrypto(crypto) {
    const active = crypto.ticker === this.state.selected;
    const slug = crypto.name.toLowerCase();

    return (
      <Col s={2} key={crypto.name}>
        <button className={`${slug} btn btn-floating ${active ? 'pulse': ''}`}>
          <img
            src={require(`./${slug}.png`)}
            alt={crypto.name}
            onClick={event => this.selectCrypto(crypto)}
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
