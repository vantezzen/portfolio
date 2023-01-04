import { Link } from "gatsby";
import React from "react";
import logo from "../../images/logo.svg";

function FooterLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      to={href}
      className="inline-flex text-lg font-medium text-gray-900 transition-all duration-200 transform font-pj hover:text-gray-600"
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <img className="w-auto h-8 mx-auto" src={logo} alt="Logo" />
        <ul className="flex flex-wrap items-center justify-center space-x-12 md:space-x-16 mt-14">
          <li>
            <FooterLink href="/">Home</FooterLink>
          </li>
          <li>
            <FooterLink href="/impressum">Impressum</FooterLink>
          </li>
          <li>
            <FooterLink href="/privacy">Datenschutzerklärung</FooterLink>
          </li>
        </ul>
        <p className="text-base font-normal text-center text-gray-600 mt-7 font-pj">
          © Copyright {new Date().getFullYear()}, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
