import Link from "next/link";
import React, { useState, useEffect } from "react";

export const IS_USE_COOKIE_KEY = "IS_USE_COOKIE_KEY";

export const Cookies = () => {
  const isUseCookie =
    typeof window !== "undefined"
      ? window.localStorage.getItem(IS_USE_COOKIE_KEY)
      : null;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isUseCookie === null) {
      setIsVisible(true);
    }
  }, [isUseCookie]);

  const handleCookieAuthorization = (accept) => {
    if (typeof gtag !== "undefined") {
      // eslint-disable-next-line no-undef
      gtag("consent", "default", {
        ad_storage: accept ? "granted" : "denied",
        analytics_storage: accept ? "granted" : "denied",
      });
    }
    setIsVisible(false);
    localStorage.setItem(IS_USE_COOKIE_KEY, `${accept}`);
  };

  return (
    isVisible && (
      <div className="fixed rounded-2xl bg-black bg-opacity-90 hover:bg-opacity-100 text-white right-2 bottom-2 w-80 p-6 hover:shadow-2xl">
        <h4 className="text-lg font-bold text-gray-400 mb-2">
          This Website Uses Cookies
        </h4>
        <div className="text-sm mb-4">
          We use cookies to improve your experience and analyze web usage. For
          more information, please visit the cookies section of{" "}
          <Link href="/privacy">
            <a className="link">IOMesh Privacy Policy</a>
          </Link>
          .
        </div>
        <div className="space-x-4 text-right">
          <button
            onClick={() => handleCookieAuthorization(true)}
            className="rounded-lg bg-iopurple hover:bg-iopurple-dark px-3 py-1 font-bold"
          >
            Accept
          </button>
          <button
            onClick={() => handleCookieAuthorization(false)}
            className="text-sm text-gray-500 hover:text-white"
          >
            Reject
          </button>
        </div>
      </div>
    )
  );
};
