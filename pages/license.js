import Head from "next/head";
import React, { useState } from "react";
import Layout from "../components/layout";

const formInitData = {
  serial: "",
  version: "",
  firstName: "",
  lastName: "",
  company: "",
  job: "",
  email: ""
}

const VALIDATE_LICENSE_UUID_REG = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
const EMAIL_REG = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// eslint-disable-next-line no-undef
const BASE_URL = process.env.NEXT_PUBLIC_NODE_ENV === "production" ? "https://www.smartx.com" : "http://192.168.31.138:4489"

export default function License() {
  const [submitResult, setSubmitResult] = useState(null); // null: not submit, true: successful, false: error
  const [formData, setFormData] = useState({
    ...formInitData,
    version: '0.10.1'
  });
  const [errMsg, setErrMsg] = useState(formInitData);
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
    setErrMsg((prev) => ({ ...prev, [key]: "" }));
  }

  const validate = () => {
    let validateMessage = {}
    for (const [key, value] of Object.entries(formData)) {
      let valueResult = !value ? 'This field is required.' : ''
      if (key === 'serial' && value && !VALIDATE_LICENSE_UUID_REG.test(value)) {
        valueResult = 'The serial Number is invalid.'
      }
      if (key === 'email' && value && !EMAIL_REG.test(value)) {
        valueResult = 'The email is invalid.'
      }
      validateMessage = {
        ...validateMessage,
        [key]: valueResult
      }
    }
    setErrMsg((prev) => ({ ...prev, ...validateMessage }))

    return Object.values(validateMessage).every(v => v === '')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return
    fetch(`${BASE_URL}/api/license/io-mesh`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...formData}),
    })
      .then(res => setSubmitResult(res.status === 200))
      .catch(() => setSubmitResult(false))
      .finally(() => setIsLoading(false));
  }

  return (
    <Layout>
      <Head>
        <title>IOMesh - Get a Perpetual Community Edition License</title>
        <meta
          name="description"
          content="Request for a perpetual Community Edition license for free."
        />
        <meta
          name="keywords"
          content="IOMesh Perpetual Community Edition License Request, license, request, perpetual"
        />
      </Head>
      <section className="firstSectionPage">
        <h1 className="text-5xl font-bold text-center w-full">Get a Perpetual Community Edition License</h1>
      </section>
      <section className="py-16">
        <div className="sectionContentWrapper">
            {
              submitResult ?
              <section className="contactForm text-center">
                <div className="text-6xl">🎉</div>
                <div className="pt-2 space-y-2">
                  <h3 className="text-3xl font-bold">
                    Submission successful!
                  </h3>
                  <h4 className="text-gray-600">
                    You will receive an email confirming this submission within a few minutes.
                  </h4>
                </div>
              </section>
              :
              <form className="contactForm" noValidate onSubmit={handleSubmit}>
                <div className="py-4 mb-4 border-b border-gray-300">
                  <h4 className="mb-4 text-sm uppercase font-bold text-gray-500">
                    Cluster Information
                  </h4>
                  {/* Serial Number */}
                  <div>
                    <div className="flex items-center flex-wrap">
                      <label htmlFor="email">Serial Number</label>
                      <label htmlFor="how-to-SN" className="questionMark w-4 h-4 ml-1.5"></label>
                      <input id="how-to-SN" type="checkbox" className="hidden">
                      </input>
                      <div className="tipSN rounded bg-gray-100 text-sm w-full mb-2 p-2 text-gray-500">
                        <p>{`Get your cluster's serial number by running the command below:`}</p>
                        <textarea
                          className="w-full mt-1 p-1 resize-none bg-gray-900 rounded text-indigo-100 font-mono text-xs"
                          value="kubectl get iomesh -n iomesh-system -o=jsonpath='{.items[0].status.license.serial}'"
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      id="serial"
                      required
                      className={`input w-full ${errMsg.serial && "error"}`}
                      title="Please input a valid cluster serial number."
                      disabled={isLoading}
                      value={formData.serial}
                      validation
                      onChange={(e) => handleInput("serial", e.target.value)}
                    ></input>
                    {errMsg.serial && (
                      <div className="text-red-500 text-sm leading-loose">
                        {errMsg.serial}
                      </div>
                    )}
                  </div>
                  {/* Version */}
                  <div>
                    <div className="flex items-center flex-wrap">
                      <label htmlFor="email">Version</label>
                      <label htmlFor="how-to-version" className="questionMark w-4 h-4 ml-1.5"></label>
                      <input id="how-to-version" type="checkbox" className="hidden">
                      </input>
                      <div className="tipVersion rounded bg-gray-100 text-sm w-full mb-2 p-2 text-gray-500">
                        <p>{`Get your cluster's IOMesh version by running the command below:`}</p>
                        <textarea
                          className="w-full mt-1 p-1 resize-none bg-gray-900 rounded text-indigo-100 font-mono text-xs"
                          value="helm list -n iomesh-system | grep iomesh # check output `CHART` field"
                        />
                      </div>
                    </div>
                    <select
                      id="version"
                      required
                      className={`input w-full ${errMsg.version && "error"}`}
                      title="Please select the IOMesh version of your cluster."
                      disabled={isLoading}
                      value={formData.version}
                      onChange={(e) => handleInput("version", e.target.value)}
                    >
                      <option value="0.10.1">0.10.1</option>
                      <option value="0.11.0">0.11.0</option>
                      <option value="0.11.1">0.11.1</option>
                    </select>
                    {errMsg.version && (
                      <div className="text-red-500 text-sm leading-loose">
                        {errMsg.version}
                      </div>
                    )}
                  </div>
                </div>
                <h4 className="mb-4 text-sm uppercase font-bold text-gray-500">
                    Contact Information
                </h4>
                <div className="sm:flex sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-2/4">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className={`input w-full ${errMsg.firstName && "error"}`}
                      disabled={isLoading}
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInput("firstName", e.target.value)
                      }
                    ></input>
                    {errMsg.firstName && (<div className="text-red-500 text-sm leading-loose">
                      {errMsg.firstName}
                    </div>)}
                  </div>
                  <div className="w-full sm:w-2/4">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className={`input w-full ${errMsg.lastName && "error"}`}
                      disabled={isLoading}
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInput("lastName", e.target.value)
                      }
                    ></input>
                    {errMsg.lastName && (
                      <div className="text-red-500 text-sm leading-loose">
                        {errMsg.lastName}
                      </div>
                    )}
                  </div>
                </div>
                <div className="sm:flex sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-2/4">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      required
                      className={`input w-full ${errMsg.company && "error"}`}
                      disabled={isLoading}
                      value={formData.company}
                      onChange={(e) =>
                        handleInput("company", e.target.value)
                      }
                    ></input>
                    {errMsg.company && (
                      <div className="text-red-500 text-sm leading-loose">
                        {errMsg.company}
                      </div>
                    )}
                  </div>
                  <div className="w-full sm:w-2/4">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input
                      type="text"
                      id="jobTitle"
                      required
                      className={`input w-full ${errMsg.job && "error"}`}
                      disabled={isLoading}
                      value={formData.job}
                      onChange={(e) =>
                        handleInput("job", e.target.value)
                      }
                    ></input>
                    {errMsg.job && (
                      <div className="text-red-500 text-sm leading-loose">
                        {errMsg.job}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="email">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className={`input w-full ${errMsg.email && "error"}`}
                    title="Please input a valid email address."
                    disabled={isLoading}
                    value={formData.email}
                    onChange={(e) => handleInput("email", e.target.value)}
                  ></input>
                  {errMsg.email && (
                    <div className="text-red-500 text-sm leading-loose">
                      {errMsg.email}
                    </div>
                  )}
                </div>
                <div className="sm:flex justify-items-end">
                  <div className="w-full">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 rounded-md bg-gray-900 text-white font-bold hover:bg-iopurple disabled:opacity-50 disabled:bg-gray-900 disabled:cursor-default"
                    >
                      {isLoading ? "Loading..." : "Generate License"}
                    </button>
                  </div>
                </div>
                {submitResult === false && (
                  <div className="text-red-500 text-sm leading-loose text-center">
                    Failed to submit form.
                  </div>
                )}
              </form>
            }
        </div>
      </section>
    </Layout>
  );
}
