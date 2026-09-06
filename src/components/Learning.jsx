import React from 'react'

const Learning = () => {
  return (
    <section
      id="learning"
      className="w-full bg-slate-50 px-4 py-16 sm:px-6 lg:px-12 xl:px-16"
    >
      <div className="mx-auto w-full max-w-350">

        {/* Heading */}
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Currently Learning
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Growing beyond frontend
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            I'm currently expanding my frontend experience by learning
            backend development and building complete applications from
            the frontend to the database.
          </p>
        </div>

        {/* Learning Content */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Node.js */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-lg font-bold text-blue-600">
              JS
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Node.js & Express
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Learning how to build backend applications and REST APIs
              with Node.js and Express.
            </p>

            <div className="mt-5 h-2 rounded-full bg-slate-100">
              <div className="h-2 w-3/5 rounded-full bg-blue-600" />
            </div>

            <p className="mt-2 text-xs font-medium text-slate-500">
              Currently learning
            </p>

          </div>

          {/* MongoDB */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-lg font-bold text-blue-600">
              DB
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              MongoDB & Mongoose
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Learning how to design data models, store application data,
              and work with MongoDB through Mongoose.
            </p>

            <div className="mt-5 h-2 rounded-full bg-slate-100">
              <div className="h-2 w-1/2 rounded-full bg-blue-600" />
            </div>

            <p className="mt-2 text-xs font-medium text-slate-500">
              Currently learning
            </p>

          </div>

          {/* Authentication */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-lg font-bold text-blue-600">
              🔐
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Authentication & APIs
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Learning authentication, JWT, authorization, protected
              routes, and connecting frontend applications to APIs.
            </p>

            <div className="mt-5 h-2 rounded-full bg-slate-100">
              <div className="h-2 w-2/5 rounded-full bg-blue-600" />
            </div>

            <p className="mt-2 text-xs font-medium text-slate-500">
              Currently learning
            </p>

          </div>

        </div>

        {/* Goal */}
        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            My Goal
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            Becoming a well-rounded full-stack developer
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            My goal is to combine my frontend experience with strong
            backend fundamentals so I can build, understand, and maintain
            complete web applications.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Learning