import Head from "next/head";
import React from "react";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name='description' content="See what's new with IOMesh. Explore the latest updates, news, and more." />
        <meta name='keywords' content="IOMesh Blog, latest blog, newest blog, related articles" />
      </Head>
      <section className="pb-8 pt-48 lg:pb-20 max-w-screen-lg mx-auto px-8 lg:px-2">
        <h2 className="block text-3xl md:text-4xl font-bold text-left w-full leading-tight text-iopurple">
          {postData.title}
        </h2>
      </section>
      <section className="max-w-screen-lg mx-auto flex lg:space-x-4 flex-wrap lg:flex-nowrap px-8 lg:px-2">
        <div className="w-full lg:w-1/5 text-sm text-gray-500 leading-8">
          <Date dateString={postData.date} />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          className="blogArticle"
        />
      </section>
    </Layout>
  );
}
