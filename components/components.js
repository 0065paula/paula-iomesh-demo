import React from "react";
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

const components = [
  {
    title: 'IOMesh Block Storage',
    description:
      "The IOMesh block storage service for ensuring distributed system consistency and data coherence, managing metadata and local disks, and implementing I/O redirection and high availability.",
    image: '/screenshots/components-01.png',
  },
  {
    title: 'IOMesh CSI Driver',
    description:
      "The self-developed CSI driver that adheres to the CSI standard and utilizes RPC (Remote Procedure Call)  to manage persistent volumes, delivering reliable and consistent storage for data applications on Kubernetes. Each Kubernetes persistent volume corresponds to an iSCSI LUN in the IOMesh cluster. ",
    image: '/screenshots/components-02.png',
  },
  {
    title: 'IOMesh Operator',
    description:
      "The IOMesh automated operations and maintenance component, allowing for roll updating IOMesh, scaling up or down nodes, and GitOps while being responsible for automatic discovery, allocation, and management of block devices.",
    image: '/screenshots/components-03.png',
  },
]


export default function Components() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <h2 className="text-3xl md:text-5xl font-bold w-full leading-tight sm:mb-20 text-white/80">
            Components
            </h2>
            <p className="mx-auto w-full lg:w-3/5 max-w-full mt-2 text-lg leading-6 text-white/60">
            The IOMesh cluster runs as a set of pods in a Kubernetes cluster and consists of the following key components:
            </p>
        </div>
        <Tab.Group
            as="div"
            className="grid grid-cols-1 items-center gap-y-2 pt-10"
        >
            {({ selectedIndex }) => (
            <>
                <div className="mx-4 flex overflow-x-auto pb-4">
                  <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 mx-auto px-0">
                      {components.map((component, componentIndex) => (
                      <div
                        key={component.title}
                        className={clsx(
                        'group relative rounded-full px-4 py-1',
                        selectedIndex === componentIndex
                            ? 'bg-white/10 ring-1 ring-inset ring-white/10'
                            : 'hover:bg-white/5'
                        )}
                      >
                        <h3>
                        <Tab
                            className={clsx(
                            'font-bold text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === componentIndex
                                ? 'text-white outline-none'
                                : 'text-white/70 hover:text-white'
                            )}
                        >
                            <span className="absolute inset-0 rounded-full" />
                            {component.title}
                        </Tab>
                      </h3>
                  </div>
                      ))}
                  </Tab.List>
                </div>
                <Tab.Panels className="lg:col-span-7">
                {components.map((component) => (
                  <Tab.Panel key={component.title} unmount={false}>
                    <div className="mb-6 w-full sm:w-2/3 mx-auto relative px-6">
                      <p className="text-base text-white">
                      {component.description}
                      </p>
                    </div>
                    <div className="mb-4 max-w-3xl mx-auto">
                        <Image
                        className=""
                        src={component.image}
                        alt=""
                        priority
                        width={1040}
                        height={886}
                        />
                    </div>
                  </Tab.Panel>
                ))}
                </Tab.Panels>

            </>
            )}
        </Tab.Group>
    </div>
  )
}
