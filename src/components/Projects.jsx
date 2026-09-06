import React from 'react'

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-white px-4 py-16 sm:px-6 lg:px-12 xl:px-16"
    >
      <div className="mx-auto w-full max-w-350">

        {/* Section Heading */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Projects
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Projects I've worked on
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A selection of projects and real-world development experience
            I've gained while working with frontend technologies and
            learning full-stack development.
          </p>
        </div>

        {/* Uootes.com */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">

          <div className="grid lg:grid-cols-2">

            {/* Project Preview */}
            <div className="flex min-h-75 items-center justify-center bg-slate-900 p-6 sm:p-10">

              <div className="w-full max-w-lg rounded-xl bg-white p-5 shadow-2xl sm:p-6">

                {/* Browser Header */}
                <div className="mb-5 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                </div>

                {/* Website Preview */}
                <div className="space-y-4">

                  <div className="h-6 w-32 rounded bg-slate-200" />

                  <div className="h-24 w-full rounded-lg bg-slate-100" />

                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-lg bg-slate-100" />
                    <div className="h-16 rounded-lg bg-slate-100" />
                    <div className="h-16 rounded-lg bg-slate-100" />
                  </div>

                  <div className="h-3 w-4/5 rounded bg-slate-100" />
                  <div className="h-3 w-3/5 rounded bg-slate-100" />

                </div>

              </div>

            </div>

            {/* Project Information */}
            <div className="p-6 sm:p-10">

              <div className="mb-4 flex flex-wrap gap-2">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  Team Project
                </span>

                <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700">
                  Frontend
                </span>

              </div>

              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Uootes.com
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                A real-world web project that I contributed to as part
                of the frontend development team.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                The frontend work was shared among the development team,
                and I contributed to assigned features and interface
                development while collaborating with other frontend
                developers.
              </p>

              {/* Contribution */}
              <div className="mt-6">

                <h4 className="text-sm font-semibold text-slate-900">
                  My contribution
                </h4>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    Contributed to frontend development as part of the team.
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    Worked on assigned frontend features and interfaces.
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    Collaborated with other frontend developers.
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    Helped build responsive and user-friendly interfaces.
                  </li>
                </ul>

              </div>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                  React
                </span>

                <span className="rounded-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                  JavaScript
                </span>

                <span className="rounded-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                  CSS
                </span>

                <span className="rounded-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                  Git
                </span>

              </div>

              {/* Project Link */}
              <div className="mt-8">
                <a
                  href="https://uootes.com"
                  className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Visit Uootes.com
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* MostyStock */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">

          <div className="grid lg:grid-cols-2">

            {/* Project Preview */}
            <div className="flex min-h-75 items-center justify-center bg-slate-900 p-6 sm:p-10 lg:order-2">

              <div className="w-full max-w-lg rounded-xl bg-white p-5 shadow-2xl sm:p-6">

                <div className="mb-5 flex items-center justify-between">
                  <div className="h-6 w-28 rounded bg-slate-200" />
                  <div className="h-8 w-8 rounded-lg bg-blue-100" />
                </div>

                <div className="grid grid-cols-3 gap-3">

                  <div className="rounded-lg bg-blue-50 p-4">
                    <p className="text-xs text-slate-500">
                      Products
                    </p>

                    <p className="mt-2 text-xl font-bold text-slate-900">
                      128
                    </p>
                  </div>

                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      Stock
                    </p>

                    <p className="mt-2 text-xl font-bold text-slate-900">
                      842
                    </p>
                  </div>

                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      Sales
                    </p>

                    <p className="mt-2 text-xl font-bold text-slate-900">
                      64
                    </p>
                  </div>

                </div>

                <div className="mt-4 space-y-3">
                  <div className="h-3 w-full rounded bg-slate-100" />
                  <div className="h-3 w-4/5 rounded bg-slate-100" />
                  <div className="h-3 w-3/5 rounded bg-slate-100" />
                </div>

              </div>

            </div>

            {/* Project Information */}
            <div className="p-6 sm:p-10 lg:order-1">

              <div className="mb-4 flex flex-wrap gap-2">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  Personal Project
                </span>

                <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700">
                  Full Stack
                </span>

              </div>

              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                MostyStock
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                An inventory management system designed to help
                businesses manage products, stock levels, pricing,
                and inventory information from one place.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                I built the frontend with React and Tailwind CSS and
                connected it to a Node.js and Express backend with
                MongoDB. The application also includes authentication
                and role-based access control.
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                  React
                </span>

                <span className="rounded-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                  Tailwind CSS
                </span>

                <span className="rounded-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                  Node.js
                </span>

                <span className="rounded-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                  Express
                </span>

                <span className="rounded-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                  MongoDB
                </span>

                <span className="rounded-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                  JWT
                </span>

              </div>

              {/* Links */}
              <div className="mt-4 flex flex-wrap gap-3">

                <a
                  href="https://inventory-management-client-jet.vercel.app/"
                  className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
                >
                  View Code
                </a>

              </div>

            </div>

          </div>
        </div>

        {/* Other Projects */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {/* E-Commerce */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-8">

            <p className="text-sm font-semibold text-blue-600">
              Frontend Project
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
              E-Commerce Interface
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              A responsive e-commerce interface built with React,
              featuring product browsing, categories, search, and
              a shopping experience.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                React
              </span>

              <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                JavaScript
              </span>

              <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                Tailwind CSS
              </span>
            </div>

            <a
              href="#"
              className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View Project →
            </a>

          </div>

          {/* Task App */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-8">

            <p className="text-sm font-semibold text-blue-600">
              JavaScript Project
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
              Task Management App
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              A simple task management application that allows users
              to create, update, complete, and remove tasks while
              storing data locally.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                JavaScript
              </span>

              <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                HTML
              </span>

              <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                CSS
              </span>
            </div>

            <a
              href="#"
              className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View Project →
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects