import React, { Component } from "react";
import setupThreejs from "./background-threejs";

import "./hero-background.css";

class HeroBackground extends Component {
  state = {
    show: true
  };

  componentDidMount() {
    this.props.onLoad();
    setupThreejs();
  }

  componentWillUnmount() {
  }

  render() {
    const { show } = this.state;

    return (
      <>
        <div id="hero-background" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          ...show ? {} : { display: 'none' },
          zIndex: 0
        }}>
          <canvas id="bg"></canvas>
        </div>
      </>
    );
  }
}

export default HeroBackground;