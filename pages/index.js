import Head from "next/head";
import Link from "next/link";
import React from "react";
import Install from "../components/install";
import Layout from "../components/layout";
import FeatureList from "../components/feature";
import Why from "../components/why";
import Components from "../components/components";

export const createFunctionWithTimeout = (callback, opt_timeout) => {
  let called = false;
  function fn() {
    if (!called) {
      called = true;
      callback();
    }
  }
  setTimeout(fn, opt_timeout || 1000);
  return fn;
};


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>IOMesh - Cloud Native Storage</title>
        <meta
          name="description"
          content="IOMesh is a cloud-native storage system that has extreme performance and strong reliability. It advances Kubernetes infrastructure to support the most demanding applications."
        />
        <meta
          name="keywords"
          content="IOMesh, Cloud Native Storage, Kubernetes Storage, Persistent Storage"
        />
      </Head>
      <section className="firstSection pt-48 pb-40">
        <div className="sectionContentWrapper">
          {/* <div className="flex flex-col items-center mb-10">
            <img src="/IOMesh_graph.svg" width={100} height={100} />
          </div> */}
          <div className="mb-8 sm:mt-32 lg:mt-16 inline-flex space-x-2">
            <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                New
            </span>
            <a href="#" className="group text-gray-600 hover:text-purple-500">
              <span className="py-1 inline-flex items-center space-x-2 text-sm font-medium leading-6 ">
                <span>We just shipped IOMesh 1.0</span>
                <span className="group-hover:translate-x-0.5 transition-transform group-hover:text-purple-500 text-gray-400" aria-hidden="true"> → </span>
              </span>
            </a>
          </div>
          <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold md:font-extrabold w-full mb-6 md:mb-12 md:space-y-4">
            <p className="bg-clip-text text-transparent headerAnimation">
              Enterprise 
            </p>
            <p className="bg-clip-text text-transparent headerAnimation">
            Kubernetes-Native
            </p>
            <p className="pb-2 bg-clip-text text-transparent headerAnimation">
            Distributed Storage
            </p>
          </h1>

          <div className="heroDesciption text-md md:text-l md:leading-6 md:w-1/2 lg:text-xl mb-8 md:mb-12 text-gray-600 hover:text-gray-900 transition">
          Build elastic, reliable, and highly performant storage resource pools for stateful applications, in a Kubernetes-native way.
          </div>

          <div className="w-full flex">
            <a
              href="#install"
              onClick={() => {
                if (typeof gtag !== "undefined") {
                  // eslint-disable-next-line
                  gtag("event", "click_install_button", {
                    event_name: "click_install_button",
                  });
                }
              }}
              className="box-border rounded-full bg-gradient-to-br from-iopurple-light to-iopurple-dark hover:from-iopurple hover:to-blue-600 hover:shadow-md transform hover:scale-105 transition-transform text-lg px-6 py-2 font-bold text-white"
            >
              Install IOMesh Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white">
        <div className="sectionContentWrapper p-12 grid grid-cols-1 sm:grid-cols-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold w-full leading-tight mb-20 col-span-1">
            Use Cases
          </h2>
          <div className="mx-auto grid grid-cols-1 max-w-7xl px-6 lg:px-8 col-span-1 sm:col-span-2 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:gap-y-16">
            <div className="pl-9 space-y-4 sm:space-y-6 lg:mr-6 relative text-center sm:text-left">
              <figure className="flex justify-center md:justify-start">
                <img src="/CaaS.svg" width={80} height={80} />
              </figure>
              <h3 className="text-xl md:text-2xl text-gray-900 font-bold text-justif">
                Containers as a Service
              </h3>
              <p className="text-md lg:text-lg text-left">
                Speed up your application development and delivery in container
                environments.
              </p>
            </div>
            <div className="pl-9 space-y-4 sm:space-y-6 lg:mr-6 relative text-center md:text-left">
              <figure className="flex justify-center md:justify-start">
                <img src="/DaaS.svg" width={80} height={80} />
              </figure>
              <h3 className="text-xl md:text-2xl text-gray-900 font-bold">
                Database as a Service
              </h3>
              <p className="text-md lg:text-lg text-left">
                Ensure node-level high availability with minimal or no downtime.
              </p>
            </div>
            <div className="pl-9 space-y-4 sm:space-y-6 relative text-center md:text-left">
              <figure className="flex justify-center md:justify-start">
                <img src="/KubeVirt.svg" width={80} height={80} />
              </figure>
              <h3 className="text-xl md:text-2xl text-gray-900 font-bold">
                KubeVirt
              </h3>
              <p className="text-md lg:text-lg text-left">
                Provide persistent storage to Virtual Machines running in
                Kubernetes Pods.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <Why />
      </section>   
      <section className="py-20 bg-white">
        <div className="sectionContentWrapper">
          <h2 className="block text-3xl md:text-5xl font-bold text-center w-full leading-tight mb-16">
            Architecture
          </h2>
          <p className="mx-auto w-2/3 max-w-full my-6 text-md leading-6 text-gray-500">
          IOMesh 可与计算负载部署在同一 Worker 节点上，这种融合部署的形式充分利用了硬件，减少基础设施的空间占用并简化了运维环节。同时，分布式架构消除了传统控制器架构瓶颈，充分发挥新型存储介质性能，提升系统并发性能和弹性扩展能力。
          </p>
          <figure className="flex flex-col items-center">
            <img src="/IOMesh_Architecture.png" width={800} height={484} />
          </figure>
        </div>
      </section>
      <section className="py-20 featureSection">
        <FeatureList />
      </section>
      <section className="bg-gradient-to-br from-iopurple-light to-iopurple-dark py-20">
        <Components />
      </section>
      <section className="py-10 bg-white installAnchor" id="install">
        <div className="sectionContentWrapper">
          <Install></Install>
        </div>
      </section>

      <section className="py-10">
        <div className="sectionContentWrapper grid grid-cols-4 gap-6 pb-20">
          <Link href="/blog/iomesh_alauda">
            <a className="block col-span-4 lg:col-span-2 px-8 py-6 md:px-12 md:py-8 group rounded-xl hover:bg-iopurple transition-all">
              <h4 className="text-md font-bold text-gray-600 uppercase group-hover:text-white group-hover:opacity-60 transition">
                Latest Blog
              </h4>
              <h3 className="block text-2xl font-bold text-left w-full mb-4 group-hover:text-white transition">
                IOMesh Completes Compatibility Certification for Alauda
                Container Platform
              </h3>
              <p className="h-28 overflow-hidden text-lg bg-clip-text text-transparent bg-gradient-to-b from-gray-700 group-hover:text-white group-hover:opacity-80 transition">
                SmartX and Alauda recently announced that the compatibility
                certification has been achieved for the persistent storage
                solution for containers. According to a test result...
              </p>
            </a>
          </Link>
          <div className="col-span-4 lg:col-span-2 px-8 py-6 md:px-12 md:py-8">
            <h4 className="text-md font-bold text-gray-600 uppercase group-hover:text-white group-hover:opacity-60 transition">
              Talk to Us
            </h4>
            <h3 className="block text-2xl font-bold text-left w-full mb-4 group-hover:text-white transition">
              Has Something to Ask?
            </h3>
            <div className="flex flex-wrap pb-2 space-y-2">
              <p className="text-lg w-full">
                Leave us a message by simply submitting a form.
              </p>
              <Link href="/contact">
                <a className="w-1/2  min-w-min px-4 py-3 rounded-md text-white text-center font-bold bg-iopurple hover:bg-iopurple-dark">
                  Contact Us
                </a>
              </Link>
            </div>
            {/* <div className="flex w-full text-sm text-gray-500">
              We will get back to you within 24 hours.
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
}
