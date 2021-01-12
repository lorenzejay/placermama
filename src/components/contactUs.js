import React from "react"
import styled from "styled-components"

export const Form = styled.form`
  input,
  textarea {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
  }
`

const ContactUs = () => {
  return (
    <Form className="flex flex-col justify-center items-center my-12 w-3/4 mx-auto overflow-visible">
      <h1 className="uppercase text-2xl text-center mb-12">
        We'd love to hear your story
      </h1>
      <div className="mb-5 pt-0 w-full ">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full "
        />
      </div>
      <div className="mb-5 pt-0 w-full">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full "
        />
      </div>
      <div className="mb-5 pt-0 w-full">
        <textarea
          rows="5"
          placeholder="Tell us your story"
          className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full "
        />
      </div>
    </Form>
  )
}

export default ContactUs
