import Head from "next/head";
import Link from "next/link";
import React from "react";
import Install from "../components/install";
import Layout from "../components/layout";

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const tiers = [
  {
    name: 'Community',
    id: 'tier-Community',
    cta: 'Request for perpetual license',
    href: '#',
    // description: 'All your essential business finances, taken care of.',
    // price: { monthly: '$15', annually: '$144' },
    highlights: [
      'A full range of features for free',
      'Learn and evaluate IOMesh; ready for test environments',
      'Community support'
    ],
  },
  {
    name: 'Enterprise',
    id: 'tier-Enterprise',
    cta: 'Contact us',
    href: '#',
    // description: 'The best financial services for your thriving business.',
    // price: { monthly: '$60', annually: '$576' },
    highlights: [
      '30-day free trial      ',
      'Up to 255 nodes',
      'Professional business support',
    ],
  },
]
const sections = [
  {
    name: 'Feature Group',
    features: [
      { name: 'Feature 1', tiers: { Community: true, Enterprise: true } },
      { name: 'Feature 2', tiers: { Community: true, Enterprise: true } },
      { name: 'Feature 3', tiers: { Community: '3 accounts', Enterprise: 'Unlimited accounts'} },
      { name: 'Adjustable data migration & recovery speed', tiers: { Community: '3 invoices', Enterprise: 'Unlimited invoices' } },
      { name: 'Exclusive offers', tiers: { Community: false, Enterprise: true } },
      { name: '6 months free advisor', tiers: { Community: false, Enterprise: true } },
      { name: 'Mobile and web access', tiers: { Community: false, Enterprise: true } },
    ],
  },
  {
    name: 'Section2',
    features: [
      { name: '24/7 customer support', tiers: { Community: true, Enterprise: true } },
      { name: 'Instant notifications', tiers: { Community: true, Enterprise: true } },
      { name: 'Budgeting tools', tiers: { Community: true, Enterprise: true } },
      { name: 'Digital receipts', tiers: { Community: true, Enterprise: true } },
      { name: 'Pots to separate money', tiers: { Community: false, Enterprise: true } },
      { name: 'Free bank transfers', tiers: { Community: false, Enterprise: true } },
      { name: 'Business debit card', tiers: { Community: false, Enterprise: true } },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


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
      <div className="relative bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:px-8">
          {/* Feature comparison (up to lg) */}
          <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
            <h2 id="mobile-comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="mx-auto max-w-2xl space-y-16">
              {tiers.map((tier) => (
                <div key={tier.id} className="border-t border-gray-900/10">
                  <div
                    className="-mt-px w-full pt-10 mt-4 flex flex-col rounded-lg bg-gradient-to-b from-white to-transparent p-6"
                  >
                    <h3
                      className="text-gray-900 text-lg text-center font-semibold leading-6"
                    >
                      {tier.name}
                    </h3>
                    <ul className="grow my-4 pl-8 pr-2 pt-2 pb-3 rounded-xl">
                    {tier.highlights.map((highlight) => 
                      <li key={highlight} className="mt-2 text-iopurple text-md">
                        <span className="mr-2 text-xl">✓</span>{highlight}
                      </li>                     
                      )}
                    </ul>
                    <Link href="{tier.href}" ><a className="mx-auto w-full min-w-min px-4 py-3 rounded-md text-white text-center font-bold bg-iopurple hover:bg-iopurple-dark">{tier.cta}</a></Link>
                  </div>

                  <div className="mt-10 space-y-10">
                    {sections.map((section) => (
                      <div key={section.name}>
                        <h4 className="text-base font-semibold leading-6 text-gray-900">{section.name}</h4>
                        <div className="relative mt-6">
                          {/* Fake card background */}
                          <div
                            aria-hidden="true"
                            className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
                          />

                          <div
                            className="ring-1 ring-gray-900/10 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0" 
                          >
                            <dl className="divide-y divide-gray-200 text-sm leading-6">
                              {section.features.map((feature) => (
                                <div
                                  key={feature.name}
                                  className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                                >
                                  <dt className="pr-4 text-gray-600">{feature.name}</dt>
                                  <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                    {typeof feature.tiers[tier.name] === 'string' ? (
                                      <span
                                        className="text-gray-900 text-right"
                                      >
                                        {feature.tiers[tier.name]}
                                      </span>
                                    ) : (
                                      <>
                                        {feature.tiers[tier.name] === true ? (
                                          <div className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" > ✓ </div>
                                        ) : (
                                          <div className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" > × </div>
                                        )}

                                        <span className="sr-only">
                                          {feature.tiers[tier.name] === true ? 'Yes' : 'No'}
                                        </span>
                                      </>
                                    )}
                                  </dd>
                                </div>
                              ))}
                            </dl>
                          </div>

                          {/* Fake card border */}
                          <div
                            aria-hidden="true"
                            className="ring-1 ring-gray-900/10 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Feature comparison (lg+) */}
          <section aria-labelledby="comparison-heading" className="hidden lg:block">
            <h2 id="comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="grid grid-cols-3 gap-x-8 border-t border-b pb-4 border-gray-900/10 before:block">
              {tiers.map((tier) => (
                <div key={tier.id} aria-hidden="true" className="mt-4 flex flex-col rounded-lg bg-gradient-to-b from-white to-transparent p-6">
                  <h3
                    className="text-xl font-semibold text-center"
                  >
                    {tier.name}
                  </h3>
                  <ul className="grow mt-2 mb-4 pl-8 pr-2 pt-2 pb-3 rounded-xl">
                    {tier.highlights.map((highlight) => 
                      <li key={highlight} className="mt-2 text-iopurple text-md">
                        <span className="mr-2 text-xl">✓</span>{highlight}
                      </li>                     
                    )}
                  </ul>
                  <Link href="{tier.href}" ><a className="w-full min-w-min px-4 py-3 rounded-md text-white text-center font-bold bg-iopurple hover:bg-iopurple-dark">{tier.cta}</a></Link>                  
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-16">
              {sections.map((section) => (
                <div key={section.name}>
                  <h3 className="text-base font-semibold leading-6 text-gray-900">{section.name}</h3>
                  <div className="relative -mx-8 mt-8">
                    {/* Fake card backgrounds */}
                    <div
                      className="absolute inset-x-8 inset-y-0 grid grid-cols-3 gap-x-8 before:block"
                      aria-hidden="true"
                    >
                      <div className="h-full w-1/2 rounded-lg bg-white shadow-sm lg:w-full" />
                      <div className="h-full w-1/2 rounded-lg bg-white shadow-sm lg:w-full" />
                    </div>

                    <table className="relative w-full border-separate border-spacing-x-8">
                      <thead>
                        <tr className="text-left">
                          <th scope="col">
                            <span className="sr-only">Feature</span>
                          </th>
                          {tiers.map((tier) => (
                            <th key={tier.id} scope="col">
                              <span className="sr-only">{tier.name} tier</span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.features.map((feature, featureIdx) => (
                          <tr key={feature.name}>
                            <th
                              scope="row"
                              className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
                            >
                              {feature.name}
                              {featureIdx !== section.features.length - 1 ? (
                                <div className="absolute inset-x-8 mt-3 h-px bg-gray-200" />
                              ) : null}
                            </th>
                            {tiers.map((tier) => (
                              <td key={tier.id} className="relative w-1/4 px-4 py-0 text-center">
                                <span className="relative h-full w-full py-3">
                                  {typeof feature.tiers[tier.name] === 'string' ? (
                                    <span
                                      className={classNames(
                                        tier.featured ? 'font-semibold text-indigo-600' : 'text-gray-900',
                                        'text-sm leading-6'
                                      )}
                                    >
                                      {feature.tiers[tier.name]}
                                    </span>
                                  ) : (
                                    <>
                                      {feature.tiers[tier.name] === true ? (
                                        <div className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" > ✓ </div>
                                        ) : (
                                          <div className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" > × </div>
                                      )}

                                      <span className="sr-only">
                                        {feature.tiers[tier.name] === true ? 'Yes' : 'No'}
                                      </span>
                                    </>
                                  )}
                                </span>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Fake card borders */}
                    <div
                      className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-3 gap-x-8 before:block"
                      aria-hidden="true"
                    >
                      {tiers.map((tier) => (
                        <div
                          key={tier.id}
                          className="ring-1 ring-gray-900/10 rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <section className="pb-20">
        <div className="container mx-auto max-w-screen-lg px-6 sm:px-8 lg:px-0">
          <Install></Install>
        </div>
      </section>
    </Layout>
  );
}
