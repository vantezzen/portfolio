import React from "react";

function SectionContainer({ children }: { children: React.ReactNode }) {
  return <div className="py-24 px-12 md:px-32">{children}</div>;
}

export default SectionContainer;
