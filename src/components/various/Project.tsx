import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Button from "./Button";

function Project({
  title,
  description,
  buildWith,
  buttons,
  image,
}: {
  title: string;
  description: React.ReactNode;
  buildWith: string;
  buttons?: React.ReactNode;
  image: React.ReactNode;
}) {
  return (
    <div className="bg-brand-900 p-6 md:p-12 rounded-xl w-full mt-24 font-medium">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-2xl text-brand-50">{title}</h2>

            <div className="mt-3 text-brand-100">{description}</div>
            <p className="text-brand-300 mt-1">Build with {buildWith}.</p>
          </div>

          <div className="flex gap-6">{buttons}</div>
        </div>

        <div>{image}</div>
      </div>
    </div>
  );
}

export default Project;
