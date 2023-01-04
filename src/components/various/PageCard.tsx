import React from "react";

function PageCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="bg-brand-900 rounded-lg p-12 mt-32 max-w-7xl">
        {children}
      </div>
    </div>
  );
}

export default PageCard;
