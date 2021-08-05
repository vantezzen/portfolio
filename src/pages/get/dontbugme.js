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
       window.location.href = "https://addons.mozilla.org/en-US/firefox/addon/dontbugme/";
     } else if (window.navigator.userAgent.indexOf('Edge') !== -1) {
       // MS Edge (Edgeium)
       window.location.href = "https://microsoftedge.microsoft.com/addons/detail/dontbugme/fdgmjcnekkpdnoplmkljagijndpddnjb";
     } else if (window.chrome) {
       // Chrome(-ium)
       window.location.href = "https://chrome.google.com/webstore/detail/dontbugme/mknlnngolpglmlcadgdmlaokbfgppmma";
     }
 
   }, []);
 
   return (
     <Container>
       <HeroName>Get DontBugMe</HeroName>
       <a href="https://chrome.google.com/webstore/detail/dontbugme/mknlnngolpglmlcadgdmlaokbfgppmma" style={{ textDecoration: 'none' }}>
         <LightButton>
           DontBugMe on the Google Chrome Webstore
         </LightButton>
       </a>
       <a href="https://addons.mozilla.org/en-US/firefox/addon/dontbugme/" style={{ textDecoration: 'none' }}>
         <LightButton>
           DontBugMe on Firefox Addons
         </LightButton>
       </a>
       <a href="https://microsoftedge.microsoft.com/addons/detail/dontbugme/fdgmjcnekkpdnoplmkljagijndpddnjb/" style={{ textDecoration: 'none' }}>
         <LightButton>
           DontBugMe on Edge Addons
         </LightButton>
       </a>
       <a href="https://github.com/vantezzen/dontbugme" style={{ textDecoration: 'none' }}>
         <LightButton>
           DontBugMe on GitHub
         </LightButton>
       </a>
       <Footer />
     </Container>
   );
 };
 
 export default GetSkipSilence
 