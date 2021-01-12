import React from "react"

const ContactUs = () => {
  return (
    <form className="flex flex-col justify-center items-center my-12 w-3/4 mx-auto overflow-visible">
      <h1 className="uppercase text-2xl text-center">
        We'd love to hear your story
      </h1>
      <div className="mb-5 pt-0 w-full">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full rounded shadow-md"
        />
      </div>
      <div className="mb-5 pt-0 w-full">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full rounded shadow-md"
        />
      </div>
      <div className="mb-5 pt-0 w-full">
        <textarea
          rows="5"
          placeholder="Tell us your story"
          className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full rounded shadow-md"
        />
      </div>
    </form>
  )
}

export default ContactUs
