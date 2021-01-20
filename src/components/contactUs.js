import React, { useState } from "react"
import styled from "styled-components"

export const FormWrapper = styled.div`
  background-color: #f3ebe3;
`

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

const ContactUs = ({ isPage }) => {
  const todayDate = new Date().toISOString().slice(0, 10)
  const [currentDate, setCurrentDate] = useState(todayDate)
  return (
    <FormWrapper
      className={`py-5 ${isPage ? "my-0 py-0" : "mt-20 mb-0 py-20"}`}
    >
      <Form
        className={`flex flex-col justify-center items-center w-3/4 mx-auto overflow-visible sm:w-7/12 md:w-4/12`}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <h2 className="uppercase text-4xl text-center mb-12">
          Start your order below
        </h2>

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
          Date you'd like the arrangement (2-day preorder required)
        </label>
        <input
          type="date"
          value={currentDate}
          onChange={e => setCurrentDate(e.target.value)}
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
    </FormWrapper>
  )
}

export default ContactUs

ContactUs.defaultProps = {
  isPage: false,
}
