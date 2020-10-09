/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

console.log(` __  __     __        ______   __  __     ______     ______     ______    
/\\ \\_\\ \\   /\\ \\      /\\__  _\\ /\\ \\_\\ \\   /\\  ___\\   /\\  == \\   /\\  ___\\   
\\ \\  __ \\  \\ \\ \\     \\/_/\\ \\/ \\ \\  __ \\  \\ \\  __\\   \\ \\  __<   \\ \\  __\\   
 \\ \\_\\ \\_\\  \\ \\_\\       \\ \\_\\  \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_____\\ 
  \\/_/\\/_/   \\/_/        \\/_/   \\/_/\\/_/   \\/_____/   \\/_/ /_/   \\/_____/ 
                                                                          `);

console.log("Hi there and welcome to the console of my page 👀");

try {
  const contactURL = new URL(window.location.href);
  contactURL.hash = "#contact";
  contactURL.pathname = "/";
  console.log(`ℹ️ If you want to Contact me, you can do so by using the contact form at the bottom of the landing page at ${contactURL.toString()}`);
} catch(e) {}
