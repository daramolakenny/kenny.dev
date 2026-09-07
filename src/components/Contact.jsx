import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-white px-4 py-16 sm:px-6 lg:px-12 xl:px-16"
    >
      <div className="mx-auto w-full max-w-350">

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Contact
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Let's work together
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              I'm open to opportunities, collaborations, and conversations
              about web development. If you have a project or simply want
              to connect, feel free to reach out.
            </p>

            <div className="mt-8 space-y-5">

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Email
                </p>
                <a
                  href="mailto:daramolakenny18@gmail.com"
                  className="mt-1 inline-block text-sm text-slate-600 transition hover:text-blue-600"
                >
                  your-email@example.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  GitHub
                </p>
                <a
                  href="https://github.com/daramolakenny"
                  className="mt-1 inline-block text-sm text-slate-600 transition hover:text-blue-600"
                >
                  GitHub Profile
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/daramola-kehinde-8936b619b"
                  className="mt-1 inline-block text-sm text-slate-600 transition hover:text-blue-600"
                >
                  LinkedIn Profile
                </a>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">

            <h3 className="text-2xl font-bold text-slate-900">
              Have a project in mind?
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Send me a message and I'll get back to you as soon as possible.
            </p>

            <form
              action="daramolakenny18@gmail.com"
              method="POST"
              encType="text/plain"
              className="mt-6 space-y-5"
            >

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="Name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="Email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="Message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact