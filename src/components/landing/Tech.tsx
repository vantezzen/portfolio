import React from "react";
import SectionContainer from "../various/SectionContainer";

function Tech() {
  return (
    <SectionContainer>
      <h2 className="text-3xl font-bold mb-6" id="tech">
        Tech
      </h2>
      <div className="bg-brand-900 rounded-lg p-12">
        <p className="font-medium">
          I've been mostly working with{" "}
          <span className="text-fire-500">Laravel</span>,{" "}
          <span className="text-fire-500">Docker</span>,{" "}
          <span className="text-fire-500">React/Next.js</span>,{" "}
          <span className="text-fire-500">TypeScript</span> and{" "}
          <span className="text-fire-500">PostgreSQL</span> lately.
        </p>
        <p className="mt-6 font-medium">
          As part of my study of applied computer science, I got to learn a lot
          of different technologies, including{" "}
          <span className="text-fire-500">Java</span> with Android Development,{" "}
          <span className="text-fire-500">Swift</span> with iOS Development,{" "}
          <span className="text-fire-500">C#</span> for use with{" "}
          <span className="text-fire-500">ASP.NET</span>,{" "}
          <span className="text-fire-500">C</span> for low-level programming and{" "}
          <span className="text-fire-500">Python</span>.
        </p>
        <p className="mt-6 font-medium">
          Additionally, through contributions on open-source projects I got to
          work with <span className="text-fire-500">Electron.js</span> for
          developing desktop apps,{" "}
          <span className="text-fire-500">react-native</span> for developing
          mobile apps and{" "}
          <span className="text-fire-500">
            various other JavaScript libraries
          </span>{" "}
          like AdonisJS, socket.io, Redux and vue.js.
        </p>
        <p className="mt-6 font-medium">
          Through my job at Smarketer, I could also get experience with{" "}
          <span className="text-fire-500">Redis</span> for large-scale caching,{" "}
          <span className="text-fire-500">GitHub Actions</span> for CI/CD,{" "}
          <span className="text-fire-500">AWS</span> including AWS Beanstalk,
          CloudWatch, RDS and IAM permissions and{" "}
          <span className="text-fire-500">various testing libraries</span> like
          PHPUnit, Cypress and Mockery.
        </p>
        <p className="mt-6 font-medium">
          Apart from programming, I also have experience with{" "}
          <span className="text-fire-500">Figma</span> for designing user
          interfaces, <span className="text-fire-500">Adobe Illustrator</span>{" "}
          for designing logos and other brand assets as well as{" "}
          <span className="text-fire-500">Photoshop</span> .
        </p>
      </div>
    </SectionContainer>
  );
}

export default Tech;
