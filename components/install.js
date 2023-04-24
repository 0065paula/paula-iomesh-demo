import Link from "next/link";
import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import copy from "copy-to-clipboard";

const TabOneText =
  "export IOMESH_DATA_CIDR=10.234.1.0/24; curl -sSL https://iomesh.run/install_iomesh.sh | sh -";
const TabTwoText =
  "export IOMESH_DATA_CIDR=10.234.1.0/24; curl -sSL https://iomesh.run/install_iomesh_el8.sh | sh -";

const Install = ({ router }) => {
  const {
    query: { tab },
  } = router;

  const [currentTab, setCurrentTab] = useState();
  const [isHoverOnCopy, setIsHoverOnCopy] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setCurrentTab(tab === "2" ? 2 : 1);
    setIsCopied(false);
  }, [tab]);

  const handleCopy = () => {
    if (typeof gtag !== "undefined") {
      const event = currentTab === 1 ? "copy_rhel7_code" : "copy_rhel8_code";
      // eslint-disable-next-line
      gtag("event", event, {
        event_name: event,
      });
    }
    const value = currentTab === 1 ? TabOneText : TabTwoText;
    copy(value);
    setIsCopied(true);
    setIsHoverOnCopy(false);
  };

  return (
    <div className="rounded-2xl w-full mx-auto bg-iopurple bg-opacity-10 p-8 text-center">
      <h3 className="text-2xl font-bold">
        Install IOMesh with One Line of Code
      </h3>
      {/* <h4 className="text-gray-500 mt-2">Just use one line of code to start using IOMesh.</h4>    */}
      <div className="tabWrapper">
        <div className="mt-8 relative max-w-xl mx-auto">
          <textarea
            type="textarea"
            readOnly
            value={currentTab === 1 ? TabOneText : TabTwoText}
            className="w-full py-2 pl-2 pr-16 h-20 sm:h-14 resize-none bg-gray-900 rounded-md text-indigo-400 font-mono text-sm hover:shadow-lg transition-shadow"
          />
          <button
            onClick={handleCopy}
            onMouseEnter={() => setIsHoverOnCopy(true)}
            onMouseOut={() => setIsHoverOnCopy(false)}
            className="px-2 h-8 absolute top-0 right-0 rounded-bl-md rounded-tr-md bg-black bg-opacity-60 text-white text-sm hover:text-iopurple-light focus:outline-none"
          >
            {isHoverOnCopy ? "Copy" : isCopied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
      <ol className="list-decimal pl-6 m-auto max-w-xl mt-2 text-sm text-gray-500 space-y-2 text-left">
        <li>
        Quick Installation only supports Community Edition, and CPU architecture of the Kubernetes cluster must be Intel x86_64.
        </li>
        <li>
        Please perform a <Link href="/license"><a className="link">custom installation</a></Link> or <Link href="/"><a className="link">offline installation</a></Link>. 
        <br></br>
        After installation, a 30-day trial license will be automatically generated. 
        </li>  
        <li>
        You can also 
        <Link href="/license"><a className="link"> get a perpetual Community Edition license </a></Link>
        for free later.
        </li>
      </ol>
      <div className="mt-6 text-lg border-t border-purple-200 pt-6">
        <a
          className="link"
          href="http://docs.iomesh.com/about-iomesh/introduction"
          onClick={() => {
            if (typeof gtag !== "undefined") {
              // eslint-disable-next-line
              gtag("event", "click_read_docs_in_install", {
                event_name: "click_read_docs_in_install",
              });
            }
          }}
        >
          Read Docs
        </a>
        <span> to explore more. Or </span>
        <a
          className="link"
          onClick={() => {
            if (typeof gtag !== "undefined") {
              // eslint-disable-next-line
              gtag("event", "click_join_community_in_install", {
                event_name: "click_join_community_in_install",
              });
            }
          }}
          href="https://join.slack.com/t/iomesh/shared_invite/zt-pnqohdau-vZnhWMsm0ETSbPA_AJGCRw"
        >
          join IOMesh community{" "}
        </a>
        on Slack!
      </div>
    </div>
  );
};

export default withRouter(Install);
