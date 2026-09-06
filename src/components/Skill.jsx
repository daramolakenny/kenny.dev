import React from 'react'

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-slate-50 px-4 py-16 sm:px-6 lg:px-12 xl:px-16"
    >
      <div className="mx-auto w-full max-w-350">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Skills
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            These are the technologies I'm currently using and learning
            as I continue growing as a developer.
          </p>
        </div>

        {/* Skills */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Frontend */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Frontend
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Building interfaces
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Technologies I use to create responsive and interactive
                web applications.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="font-medium text-slate-800">HTML</p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="font-medium text-slate-800">CSS</p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="font-medium text-slate-800">JavaScript</p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="font-medium text-slate-800">React</p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="font-medium text-slate-800">Tailwind CSS</p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="font-medium text-slate-800">React Router</p>
              </div>

            </div>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Backend
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Currently learning
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Technologies I'm learning to build APIs and complete
                full-stack applications.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="font-medium text-slate-800">Node.js</p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="font-medium text-slate-800">Express</p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="font-medium text-slate-800">MongoDB</p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="font-medium text-slate-800">Mongoose</p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="font-medium text-slate-800">REST APIs</p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="font-medium text-slate-800">JWT Auth</p>
              </div>

            </div>
          </div>

        </div>

        {/* Tools */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Tools
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              Development workflow
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Git
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              GitHub
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              VS Code
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Vite
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              npm
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Vercel
            </span>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills