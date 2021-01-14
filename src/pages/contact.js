import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import VideoStrip from "../components/videoStrip"
export const Form = styled.form`
  -webkit-appearance: none;
  input,
  textarea {
    -webkit-appearance: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19) !important;
    border-radius: 4px;
    margin-bottom: 15px;
    z-index: 20;
  }
`

const Contact = () => {
  return (
    <Layout>
      <Form
        method="post"
        action="#"
        className="flex flex-col justify-center items-center my-12 w-3/4 mx-auto overflow-visible sm:w-7/12 md:w-4/12"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <h1 className="uppercase text-3xl text-center mb-12 md:text-5xl ">
          Let's have a conversation!
        </h1>
        <p className="text-sm mb-5 sm:text-lg md:text-lg  md:mb-12 w-full">
          Getting to know each other is critical part of our photography /
          videography process. I'd love to grab a drink with you or to visit on
          Skype or FaceTime.
        </p>

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full "
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full "
        />
        <label className="mr-auto" htmlFor="date">
          Wedding Date:
        </label>
        <input
          type="date"
          name="date"
          className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full"
        />

        <textarea
          rows="5"
          placeholder="Tell us your story"
          className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full "
        />
        <button
          className="bg-gray-700 w-full rounded text-white py-1 uppercase"
          type="submit"
        >
          Submit
        </button>
      </Form>
      <VideoStrip />
    </Layout>
  )
}

export default Contact
