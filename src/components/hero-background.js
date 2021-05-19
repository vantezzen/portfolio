import React, { Component } from "react";
import loadable from '@loadable/component';
import tw from 'tailwind.macro'
import { RotateCw } from 'react-feather';

import gameOfLife from './heroGames/gameOfLife';
import colorfulWaves from "./heroGames/colorfulWaves";
// import breathingColor from "./heroGames/breathingColor";
import randomColorCycling from "./heroGames/randomColorCycling";
import circles from "./heroGames/circles";
import drops from "./heroGames/drops";
import colorMixing from "./heroGames/colorMixing";

import "./hero-background.css";

const Sketch = loadable(() => import('./p5'));

const backgrounds = [
  colorfulWaves,
  gameOfLife,
  randomColorCycling,
  circles,
  drops,
  colorMixing,
  // breathingColor
];

class HeroBackground extends Component {
  state = {
    currentBackground: 0,
    show: true
  };

  constructor(props) {
    super(props);

    this.scrollListener = this.scrollListener.bind(this)
  }

  scrollListener() {
    if (window.scrollY > 300 && this.state.show) {
      this.setState({
        show: false
      });
    } else if (window.scrollY < 300 && !this.state.show) {
      this.setState({
        show: true
      });
    }
  }

  componentDidMount() {
    this.setState({
      // Use a random background
      currentBackground: Math.floor(Math.random() * backgrounds.length),
    });

    window.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  render() {
    const { show, currentBackground } = this.state;
    const background = backgrounds[currentBackground];

    return (
      <>
        <div id="hero-background" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          ...show ? {} : { display: 'none' },
          zIndex: 0
        }}>
          <Sketch
            {...background}
            key={currentBackground}
            setup={(...args) => {
              background.setup(...args);
              if (this.props.onLoad) {
                this.props.onLoad();
              }
            }}
          />
        </div>
        <div 
          style={{
            bottom: '1rem',
            right: '1rem',
            ...tw`fixed z-10 flex align-center`
          }}
          id="hero-background-btn"
        >
          <i style={{
            color: '#444444',
            fontWeight: 400,
            marginRight: 10,
            fontSize: '0.8rem',
            ...tw`md:hidden`
          }} className="background-info-text">
            {background.info}
          </i>
          <button 
            style={{
              ...tw`bg-transparent z-10 border-none outline-none cursor-pointer`
            }}
            onClick={() => {
              let newBackground = currentBackground + 1;
              if (newBackground >= backgrounds.length) {
                newBackground = 0;
              }

              this.setState({
                currentBackground: newBackground,
              });
            }}
            title="Get new background"
          >
            <RotateCw />
          </button>
        </div>
      </>
    );
  }
}

export default HeroBackground;