import Head from "next/head";
import Link from "next/link";
import React from "react";
import Date from "../components/date";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>IOMesh - Blog</title>
        <meta name='description' content="See what's new with IOMesh. Explore the latest updates, news, and more." />
        <meta name='keywords' content="IOMesh Blog, latest blog, newest blog, related articles" />
      </Head>
      <section className="firstSectionPage">
        <div className="sectionContentWrapper">
          <h1 className="text-5xl font-bold text-center w-full">Blog</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="sectionContentWrapper">
          <ul className="mx-auto md:max-w-screen-md space-y-8">
            {allPostsData.map(({ id, date, title }) => (
              <li className="" key={id}>
                <Link href={`/blog/${id}`}>
                  <a className="group text-2xl text-gray-900 transition rounded-xl bg-white p-8 block border-transparent hover:border-iopurple-light border-2 hover:shadow-lg">
                    <h3 className="font-bold group-hover:text-iopurple transition">
                      {title}
                    </h3>
                    <div className="text-sm text-gray-500 mt-2">
                      <Date dateString={date} />
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
