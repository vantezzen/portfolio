import React, { Fragment, MouseEventHandler } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { X, Menu as MenuIcon } from "react-feather";
import logo from "../../images/logo.png";
import { classNames } from "../../lib/utils";
import { isAnchorLink, smoothScrollToAnchor } from "../../lib/smoothScroll";
import { Link } from "gatsby";

const navigation = [
  { name: "Home", href: "/#top", current: true },
  { name: "About", href: "/#about", current: false },
  { name: "Projects", href: "/#projects", current: false },
  { name: "Tech", href: "/#tech", current: false },
];

export default function Navbar() {
  const getLinkHandler = (
    href: string,
    close: () => void
  ): MouseEventHandler<HTMLAnchorElement> => {
    return (e) => {
      if (isAnchorLink(href) && window.location.pathname === "/") {
        e.preventDefault();
        smoothScrollToAnchor(href);
        close();
      }
    };
  };
  return (
    <Disclosure as="nav" className="fixed top-5 px-5 w-full z-20">
      {({ open, close }) => (
        <div className="bg-brand-800 rounded-lg max-w-7xl mx-auto">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-brand-400 hover:bg-brand-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <Link
                  to="/"
                  onClick={getLinkHandler("#top", close)}
                  className="flex flex-shrink-0 items-center hover:text-fire-500 duration-200"
                >
                  <img
                    className="block h-6 w-auto"
                    src={logo}
                    alt="vantezzen"
                  />
                  <span className="font-bold ml-6 text-lg">Hollstein</span>
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={getLinkHandler(item.href, close)}
                        className={classNames(
                          item.current
                            ? "bg-brand-900 text-white"
                            : "text-brand-300 hover:bg-brand-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={getLinkHandler(item.href, close)}
                  className={classNames(
                    item.current
                      ? "bg-brand-900 text-white"
                      : "text-brand-300 hover:bg-brand-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
