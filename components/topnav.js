import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const Topnav = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="topNavWrapper">
      <div className="topNav relative">
        <Link href="/">
          <a>
            <img
              className="cursor-pointer"
              src="/IOMesh_logo_on_white.svg"
              width={168}
              height={84}
            />
          </a>
        </Link>
        <button
          id="navHamburger"
          className={`${active ? "open" : " "}
            lg:hidden`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul
          className={`${
            active ? "" : "hidden"
          } flex flex-col absolute bg-white right-0 top-20 rounded-xl p-4 lg:flex lg:p-0 lg:bg-transparent lg:relative lg:top-0 lg:flex-row lg:items-center lg:space-x-4 shadow-xl lg:shadow-none`}
        >
          <li className="">
            <Link href="/spec">
              <a
                className={`p-4 text-base text-gray-800 hover:text-iopurple block w-full lg:w-auto ${
                  router.pathname === "/spec" ? "font-bold" : ""
                }`}
              >
                Spec
              </a>
            </Link>
          </li>
          <li className="">
            <a
              className="p-4 text-base text-gray-800 hover:text-iopurple block w-full lg:w-auto"
              href="http://docs.iomesh.com/about-iomesh/introduction"
            >
              Docs
            </a>
          </li>
          <li className="">
            <Link href="/blog">
              <a
                className={`p-4 text-base text-gray-800 hover:text-iopurple block w-full lg:w-auto ${
                  router.pathname === "/blog" ? "font-bold" : ""
                }`}
              >
                Blog
              </a>
            </Link>
          </li>
          <li className="">
            <a
              onClick={() => {
                if (typeof gtag !== "undefined") {
                  // eslint-disable-next-line
                  gtag("event", "click_slack", {
                    event_name: "click_slack",
                  });
                }
              }}
              className="block my-2 lg:my-0 box-border group rounded-full border-gray-800 border-2 hover:border-purple-600 transition text-sm inline-block px-4 py-1.5 font-bold text-gray-800 group-hover:text-iopurple flex align-center space-x-2"
              href="https://join.slack.com/t/iomesh/shared_invite/zt-pnqohdau-vZnhWMsm0ETSbPA_AJGCRw"
            >
              <img src="/slack.svg" width={16} height={16} />
              <span>We&apos;re on Slack!</span>
            </a>
          </li>
          <li className="">
            <a
              onClick={() => {
                if (typeof gtag !== "undefined") {
                  // eslint-disable-next-line
                  gtag("event", "click_get_started", {
                    event_name: "click_get_started",
                  });
                }
              }}
              className="block w-full lg:w-ault text-sm text-center inline-block px-4 py-2 font-bold text-white box-border rounded-full bg-gray-800 hover:bg-iopurple transition"
              href="http://docs.iomesh.com/deploy/prerequisites"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
