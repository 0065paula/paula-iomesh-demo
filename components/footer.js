import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="sectionContentWrapper pt-4 pb-16 flex justify-between items-center flex-wrap text-sm border-t border-gray-300">
      <div className="text-lg w-full md:w-auto">IOMesh</div>
      <div className="space-x-2 md:space-x-4 flex flex-wrap items-center">
        <Link href="/spec">
          <a className="footerLink">Spec</a>
        </Link>
        <a
          className="footerLink"
          href="http://docs.iomesh.com/about-iomesh/introduction"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
        {/* <Link href="/blog">
          <a className="footerLink">Blog</a>
        </Link> */}
        <Link href="/contact">
          <a className="footerLink">Contact Us</a>
        </Link>
        <Link href="/privacy">
          <a className="footerLink">Privacy Policy</a>
        </Link>
        <span className="text-gray-300"> | </span>
        <a
          className="hover:opacity-70"
          href="https://join.slack.com/t/iomesh/shared_invite/zt-pnqohdau-vZnhWMsm0ETSbPA_AJGCRw"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            if (typeof gtag !== "undefined") {
              // eslint-disable-next-line
              gtag("event", "click_slack_icon", {
                event_name: "click_slack_icon",
              });
            }
          }}
        >
          <img src="/Slack_footer.svg" width={16} height={16} />
        </a>
        <a
          className="hover:opacity-70"
          href="https://twitter.com/IOMesh_hq"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            if (typeof gtag !== "undefined") {
              // eslint-disable-next-line
              gtag("event", "click_twitter_icon", {
                event_name: "click_twitter_icon",
              });
            }
          }}
        >
          <img src="/Twitter_footer.svg" width={16} height={16} />
        </a>
        <a
          className="hover:opacity-70"
          href="https://www.youtube.com/channel/UCJV59ZDxjm822LK_oUhi7qA"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            if (typeof gtag !== "undefined") {
              // eslint-disable-next-line
              gtag("event", "click_youtube_icon", {
                event_name: "click_youtube_icon",
              });
            }
          }}
        >
          <img src="/YouTube_footer.svg" width={16} height={16} />
        </a>
      </div>
    </footer>
  );
};
