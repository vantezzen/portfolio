/**
 * Tilt the element based on the hover position of the mouse
 */
import React, { Component, createRef } from 'react';

class TiltedByMouse extends Component {
  state = {
    transform: ''
  }

  constructor(props) {
    super(props);
    this.element = createRef();

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
  }

  componentDidMount() {
    const container = this.element.current;
    container.addEventListener('mouseenter', this.onMouseEnter);
    container.addEventListener('mousemove', this.onMouseMove);
    container.addEventListener('mouseleave', this.onMouseLeave);
    window.addEventListener("deviceorientation", this.onDeviceOrientation);
  }

  componentWillUnmount() {
    const container = this.element.current;
    container.removeEventListener('mouseenter', this.onMouseEnter);
    container.removeEventListener('mousemove', this.onMouseMove);
    container.removeEventListener('mouseleave', this.onMouseLeave);
    window.removeEventListener("deviceorientation", this.onDeviceOrientation);
  }

  tiltTo(verticalTiltAmount, horizontalTiltAmount) {
    const maxTilt = 3;
    const perspective = 300;

    const tiltX = -((maxTilt / 2) - ((horizontalTiltAmount) * maxTilt)).toFixed(2);
    const tiltY = -(((verticalTiltAmount) * maxTilt) - (maxTilt / 2)).toFixed(2);

    this.setState({
      transform: `perspective(${perspective}px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`,
    })
  }

  onMouseEnter() {
    this.setState({
      transition: 'all 0.1s ease',
    })

    setTimeout(() => {
      this.setState({
        transition: '',
      })
    }, 100);
  }

  onMouseMove(evt) {
    const container = this.element.current;

    const containerWidth = container.clientWidth;
    const widthHalf = containerWidth / 2;
    const containerHeight = container.clientHeight;
    const heightHalf = containerHeight / 2;
    const mouseX = evt.layerX;
    const mouseY = evt.layerY;

    // Tilt in a number between -1 and 1
    const capBetween = (num, min, max) => {
      if (num > max) {
        return max;
      } else if (num < min) {
        return min;
      }
      return num;
    };
    const verticalTiltAmount = capBetween((mouseY - heightHalf) / heightHalf, -1, 1);
    const horizontalTiltAmount = capBetween((mouseX - widthHalf) / widthHalf, -1, 1);

    this.tiltTo(verticalTiltAmount, horizontalTiltAmount);
  }

  onMouseLeave() {
    this.setState({
      transform: '',
      transition: 'all 0.5s'
    })
  }

  // React to gyroscope
  onDeviceOrientation(evt) {
    
  }

  render() {
    const { children } = this.props;

    return (
      <div ref={this.element} style={this.state}>
        { children }
      </div>
    );
  } 
}

export default TiltedByMouse;