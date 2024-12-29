import React from 'react'

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full ">
      <div className="bg-[rgb(249,180,84)] p-8 md:p-12 rounded-3xl w-1/2">
        <h1 className="text-center text-2xl font-bold text-black mb-6">
          Contact Us
        </h1>
        <form className="space-y-4 ">
          <div className="px-32">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-black mb-2"
            >
              NAME
            </label>
            <input
              type="text"
              id="name"
              placeholder="Jira Martins"
              className="px-4 py-2 bg-orange-200 text-black rounded-full border-none w-full "
            />
          </div>

          <div className="px-32">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black mb-2"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              placeholder="hello@reallygreatsite.com"
              className="w-full px-4 py-2 bg-orange-200 text-black rounded-full border-none  focus:ring-orange-500 "
            />
          </div>

          <div className="px-32">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-black mb-2"
            >
              MESSAGE
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
              rows="4"
              className="w-full px-4 py-2 bg-orange-200 text-black rounded-md border-none  focus:ring-orange-500 "
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-[rgb(175,47,100)] text-white font-semibold rounded-md shadow-md hover:bg-rose-600"
            >
              Send the message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact