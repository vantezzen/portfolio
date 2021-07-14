/**
 * Redirect based on the current browser
 */
import React,{ useEffect } from "react"

import {
  Container,
  HeroName,
  LightButton
} from '../../styles/index.js'
import '../../styles/global.css'

import Footer from "../../components/footer"

const GetSkipSilence = () => {
  useEffect(() => {

    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      // Firefox
      window.location.href = "https://addons.mozilla.org/de/firefox/addon/skip-silence/";
    } else if (window.chrome) {
      // Chrome(-ium)
      window.location.href = "https://chrome.google.com/webstore/detail/skip-silence/fhdmkhbefcbhakffdihhceaklaigdllh";
    }

  }, []);

  return (
    <Container>
      <HeroName>Get Skip Silence</HeroName>
      <a href="https://chrome.google.com/webstore/detail/skip-silence/fhdmkhbefcbhakffdihhceaklaigdllh" style={{ textDecoration: 'none' }}>
        <LightButton>
          Skip Silence on the Google Chrome Webstore
        </LightButton>
      </a>
      <a href="https://addons.mozilla.org/de/firefox/addon/skip-silence/" style={{ textDecoration: 'none' }}>
        <LightButton>
          Skip Silence on the Firefox Addons
        </LightButton>
      </a>
      <a href="https://github.com/vantezzen/skip-silence" style={{ textDecoration: 'none' }}>
        <LightButton>
          Skip Silence on GitHub
        </LightButton>
      </a>
      <Footer />
    </Container>
  );
};

export default GetSkipSilence
