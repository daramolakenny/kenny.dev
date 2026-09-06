import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-white px-4 py-16 sm:px-6 lg:px-12 xl:px-16"
    >
      <div className="mx-auto w-full max-w-350">

        {/* Section Heading */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            About Me
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            A little about me
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* About Text */}
          <div>
            <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              I'm a frontend developer who enjoys turning ideas into
              responsive, user-friendly web applications. I mainly work
              with JavaScript, React, and modern frontend tools to build
              clean and practical interfaces.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              I'm also expanding my knowledge into backend development.
              I'm currently learning how to build APIs, work with
              databases, implement authentication, and connect frontend
              applications to backend services.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              My goal is to become a well-rounded full-stack developer
              by continuously building real-world projects and improving
              my understanding of both frontend and backend development.
            </p>
          </div>

          {/* Quick Information */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-500">
                Focus
              </p>

              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Frontend Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Building responsive and user-friendly interfaces with
                React and JavaScript.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-500">
                Currently Learning
              </p>

              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Backend Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Node.js, Express, MongoDB, REST APIs, authentication,
                and authorization.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-500">
                Approach
              </p>

              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Learn by Building
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                I improve my skills by building practical projects and
                solving real development problems.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-500">
                Goal
              </p>

              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Full-Stack Developer
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Grow from frontend development into building complete
                full-stack applications.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About