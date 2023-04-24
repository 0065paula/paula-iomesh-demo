import Head from "next/head";
import React, { useState } from "react";
import Layout from "../components/layout";

// request body
// {
//   first_name: "",
//   last_name: "",
//   email: "",
//   custom_fields: {
//     e8_T: "", // company
//     e7_T: "", // job_title
//     e6_T: "", // message
//     e9_T: "", // is_subscribed_to_newsletter "true" | "false"
//   }
// }

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitResult, setSubmitResult] = useState(null); // null: not submit, true: successful, false: error

  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "", // e8_T
    job_title: "", // e7_T
    message: "", // e6_T
    is_subscribed_to_newsletter: true, // e9_T "true" | "fals
  });
  const [errMsg, setErrMsg] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    job_title: "",
    message: "",
    is_subscribed_to_newsletter: "",
  });

  const handleFieldChange = (key, value) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
    setErrMsg((prev) => ({ ...prev, [key]: "" }));
    setSubmitResult(null);
  };

  const checkFormInput = () => {
    let isError = false;
    for (const key of Object.keys(values)) {
      const value = values[key];
      switch (key) {
        case "first_name":
        case "last_name":
        case "company":
        case "job_title": {
          if (!value) {
            setErrMsg((prev) => ({
              ...prev,
              [key]: "This field is required.",
            }));
            isError = true;
          }
          break;
        }
        case "email": {
          if (!value) {
            setErrMsg((prev) => ({
              ...prev,
              [key]: "This field is required.",
            }));
            isError = true;
            break;
          }
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          const validation = re.test(value.toLowerCase());
          if (!validation) {
            setErrMsg((prev) => ({ ...prev, [key]: "Email is invalid." }));
            isError = true;
          }
          break;
        }
        default: {
          break;
        }
      }
    }
    return isError;
  };

  const submit = (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    setSubmitResult(null);
    const isError = checkFormInput();
    if (isError) {
      return;
    }
    setIsLoading(true);
    fetch("https://subscription-email.smartx-labs.workers.dev/iomesh", {
      method: "POST",
      body: JSON.stringify({
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        custom_fields: {
          e8_T: values.company,
          e7_T: values.job_title,
          e6_T: values.message || "",
          e9_T: values.is_subscribed_to_newsletter ? "true" : "false",
        },
      }),
    })
      .then((response) => response.json())
      .then(() => setSubmitResult(true))
      .catch(() => setSubmitResult(false))
      .finally(() => setIsLoading(false));
  };

  return (
    <Layout>
      <Head>
        <title>IOMesh - Contact Us</title>
        <meta
          name="description"
          content="Feel free to contact us for further information."
        />
        <meta
          name="keywords"
          content="IOMesh Contact Us, contact us, contact, ask"
        />
      </Head>
      <section className="firstSectionPage">
        <h1 className="text-5xl font-bold text-center w-full">Contact Us</h1>
      </section>
      <section className="py-16">
        <div className="sectionContentWrapper">
          {submitResult === true ? (
            <section className="contactForm text-center">
              <div className="text-6xl">🎉</div>
              <div className="pt-2 space-y-2">
                <h3 className="text-3xl font-bold">
                  Thanks for your submission.
                </h3>
                <h4 className="text-gray-600">
                  We will get back to you within 24 hours.
                </h4>
              </div>
            </section>
          ) : (
            <form className="contactForm" onSubmit={submit} noValidate>
              <div className="sm:flex sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="w-full sm:w-2/4">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className={`input w-full ${errMsg.first_name && "error"}`}
                    disabled={isLoading}
                    value={values.first_name}
                    onChange={(e) =>
                      handleFieldChange("first_name", e.target.value)
                    }
                  ></input>
                  {errMsg.first_name && (
                    <div className="text-red-500 text-sm leading-loose">
                      {errMsg.first_name}
                    </div>
                  )}
                </div>
                <div className="w-full sm:w-2/4">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className={`input w-full ${errMsg.last_name && "error"}`}
                    disabled={isLoading}
                    value={values.last_name}
                    onChange={(e) =>
                      handleFieldChange("last_name", e.target.value)
                    }
                  ></input>
                  {errMsg.last_name && (
                    <div className="text-red-500 text-sm leading-loose">
                      {errMsg.last_name}
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
                    value={values.company}
                    onChange={(e) =>
                      handleFieldChange("company", e.target.value)
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
                    className={`input w-full ${errMsg.job_title && "error"}`}
                    disabled={isLoading}
                    value={values.job_title}
                    onChange={(e) =>
                      handleFieldChange("job_title", e.target.value)
                    }
                  ></input>
                  {errMsg.job_title && (
                    <div className="text-red-500 text-sm leading-loose">
                      {errMsg.job_title}
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
                  value={values.email}
                  onChange={(e) => handleFieldChange("email", e.target.value)}
                ></input>
                {errMsg.email && (
                  <div className="text-red-500 text-sm leading-loose">
                    {errMsg.email}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="input w-full"
                  placeholder="Request for support or a demo, or ask us anything."
                  disabled={isLoading}
                  value={values.message}
                  onChange={(e) => handleFieldChange("message", e.target.value)}
                ></textarea>
              </div>
              <div className="sm:flex justify-items-end">
                <div className="w-full sm:w-3/4 flex items-center mb-4 sm:mb-0">
                  <input
                    type="checkbox"
                    id="subscribe"
                    className="subscribeCheck"
                    disabled={isLoading}
                    checked={values.is_subscribed_to_newsletter}
                    onChange={(e) =>
                      handleFieldChange(
                        "is_subscribed_to_newsletter",
                        e.target.checked
                      )
                    }
                  />
                  <label
                    htmlFor="subscribe"
                    className="subscribeCheckToggle mr-2"
                  >
                  </label>
                  <label
                    htmlFor="subscribe"
                    className="cursor-pointer hover:text-gray-800 text-sm sm:text-base"
                  >
                    Subscribe to IOMesh Newsletter
                  </label>
                </div>
                <div className="w-full sm:w-1/4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 rounded-md bg-gray-900 text-white font-bold hover:bg-iopurple disabled:opacity-50 disabled:bg-gray-900 disabled:cursor-default"
                  >
                    {isLoading ? "Loading..." : "Submit"}
                  </button>
                </div>
              </div>
              {submitResult === false && (
                <div className="text-red-500 text-sm leading-loose">
                  Failed to submit form.
                </div>
              )}
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
