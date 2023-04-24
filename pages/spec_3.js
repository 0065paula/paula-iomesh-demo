import Head from "next/head";
import Link from "next/link";
import React from "react";
import Install from "../components/install";
import Layout from "../components/layout";

export default function Spec() {
  return (
    <Layout>
      <Head>
        <title>IOMesh - Spec</title>
        <meta
          name="description"
          content="IOMesh provides a free community edition, with community support on Slack."
        />
        <meta
          name="keywords"
          content="IOMesh, spec, community edition, enterprise edition, slack community, community support, enterprise support"
        />
      </Head>
      <section className="firstSectionPage">
        <h1 className="text-5xl md:text-5xl font-bold text-center w-full">
          Spec
        </h1>
      </section>
      <section className="py-16">
        <div className="sectionContentWrapper overflow-auto ">
          <table className="table-fixed max-w-screen-lg mx-auto text-left bg-white rounded-lg sm:rounded-xl">
            <thead className="text-xl border-b-2 border-gray-200">
              <tr className="h-12">
                <th className="w-2/5  pt-4 px-8"></th>
                <th className="w-1/3  pt-4 px-8 text-center">Community Edition</th>
                <th className="w-1/3  pt-4 px-8 text-center">
                  Enterprise Edition
                </th>
              </tr>
              <tr className="h-2">
                <th className="w-2/5 px-8 pb-2"></th>
                <th className="w-1/3 px-8 pb-2 text-center">
                  <Link href="/license">
                    <a className="link text-sm font-normal">Request for Perpetual License</a>
                  </Link>
                </th>
                <th className="w-1/3 px-8 pb-2 text-center">
                  <Link href="/contact">
                    <a className="link text-sm font-normal">Contact Sales</a>
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody className="text-base text-gray-500">
              <tr className="text-sm uppercase font-bold h-12 text-gray-900">
                <td className="px-8">Cluster Specifications and Services</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="border-b-2 border-gray-100">
                <td className="px-8 py-2 text-gray-800">Support</td>
                <td className="px-8 py-2 text-center">
                  <a
                    href="https://join.slack.com/t/iomesh/shared_invite/zt-pnqohdau-vZnhWMsm0ETSbPA_AJGCRw"
                    target="_blank"
                    className="link"
                    rel="noreferrer"
                  >
                    Community Support via Slack
                  </a>
                </td>
                <td className="px-8 py-2 text-center">
                  24×7 Enterprise Support
                </td>
              </tr>
              <tr className="border-b-2 border-gray-100">
                <td className="px-8 py-2 text-gray-800">Maximum Number of Hosts</td>
                <td className="px-8 py-2 text-center">
                  3
                </td>
                <td className="px-8 py-2 text-center">
                  255
                </td>
              </tr>
              <tr className="text-sm uppercase font-bold h-12 text-gray-900">
                <td className="px-8">Features</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-8 py-2 text-gray-800">
                  Block Volume and Mounted Volume
                </td>
                <td className="px-8 py-2 relative">
                  <img className="absolute left-2/4 -ml-2" src="/check.svg" width={16} height={16} />
                </td>
                <td className="px-8 py-2 relative">
                  <img className="absolute left-2/4 -ml-2" src="/check.svg" width={16} height={16} />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-8 py-2 text-gray-800">
                  MULTI_NODE_MULTI_WRITER{" "}
                  <p className="text-sm text-gray-400">(Block Volume only)</p>
                </td>
                <td className="px-8 py-2 relative">
                  <img className="absolute left-2/4 -ml-2" src="/check.svg" width={16} height={16} />
                </td>
                <td className="px-8 py-2 relative">
                  <img className="absolute left-2/4 -ml-2" src="/check.svg" width={16} height={16} />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-8 py-2 text-gray-800">Volume Expansion</td>
                <td className="px-8 py-2 relative">
                  <img className="absolute left-2/4 -ml-2" src="/check.svg" width={16} height={16} />
                </td>
                <td className="px-8 py-2 relative">
                  <img className="absolute left-2/4 -ml-2" src="/check.svg" width={16} height={16} />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-8 py-2 text-gray-800">Volume Cloning</td>
                <td className="px-8 py-2 relative">
                  <img className="absolute left-2/4 -ml-2" src="/check.svg" width={16} height={16} />
                </td>
                <td className="px-8 py-2 relative">
                  <img className="absolute left-2/4 -ml-2" src="/check.svg" width={16} height={16} />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-8 py-2 text-gray-800">
                  Snapshots and Recovery
                </td>
                <td className="px-8 py-2 relative">
                  <img className="absolute left-2/4 -ml-2" src="/check.svg" width={16} height={16} />
                </td>
                <td className="px-8 py-2 relative">
                  <img className="absolute left-2/4 -ml-2" src="/check.svg" width={16} height={16} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="pb-20">
        <div className="container mx-auto max-w-screen-lg px-6 sm:px-8 lg:px-0">
          <Install></Install>
        </div>
      </section>
    </Layout>
  );
}
