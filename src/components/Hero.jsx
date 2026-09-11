// import React from 'react'

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="w-full overflow-hidden bg-slate-50"
//     >
//       <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-12 xl:px-16">
//         <div className=" grid min-h-[calc(100vh-4rem)] w-full max-w-350 items-center gap-10 lg:grid-cols-2 lg:gap-16">

//           {/* Left Content */}
//           <div className="min-w-0 max-w-2xl">

//             <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-blue-600 sm:text-sm">
//               Frontend Developer
//             </p>

//             <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
//               Hi, I'm Kenny.
//               <br />
//               I build{' '}
//               <span className="text-blue-600">
//                 modern web applications.
//               </span>
//             </h1>

//             <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
//               I'm a frontend developer focused on building clean, responsive,
//               and user-friendly web experiences with React. I'm currently
//               expanding my skills into backend development and full-stack
//               applications.
//             </p>

//             {/* Buttons */}
//             <div className="mt-7 flex flex-wrap gap-3">

//               <a
//                 href="#projects"
//                 className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 sm:px-6 sm:text-base"
//               >
//                 View My Projects
//               </a>

//               <a
//                 href="#contact"
//                 className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600 sm:px-6 sm:text-base"
//               >
//                 Contact Me
//               </a>

//             </div>

//             {/* Social Links */}
//             <div className="mt-7 flex items-center gap-5">

//               <a
//                 href="#"
//                 className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
//               >
//                 GitHub
//               </a>

//               <a
//                 href="#"
//                 className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
//               >
//                 LinkedIn
//               </a>

//             </div>

//           </div>

//           {/* Right Side */}
//           <div className="flex w-full min-w-0 justify-center lg:justify-end">

//             <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:p-6">

//               {/* Card Header */}
//               <div className="mb-5 flex items-center gap-3">

//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-lg font-bold text-blue-600 sm:h-12 sm:w-12 sm:text-xl">
//                   K
//                 </div>

//                 <div className="min-w-0">
//                   <h2 className="font-bold text-slate-900">
//                     Kenny.dev
//                   </h2>

//                   <p className="text-xs text-slate-500 sm:text-sm">
//                     Developer Portfolio
//                   </p>
//                 </div>

//               </div>

//               {/* Skills Preview */}
//               <div className="space-y-4">

//                 {/* React */}
//                 <div>
//                   <div className="mb-2 flex justify-between text-xs sm:text-sm">
//                     <span className="font-medium text-slate-700">
//                       React
//                     </span>

//                     <span className="text-slate-500">
//                       Frontend
//                     </span>
//                   </div>

//                   <div className="h-2 rounded-full bg-slate-100">
//                     <div className="h-2 w-4/5 rounded-full bg-blue-600" />
//                   </div>
//                 </div>

//                 {/* JavaScript */}
//                 <div>
//                   <div className="mb-2 flex justify-between text-xs sm:text-sm">
//                     <span className="font-medium text-slate-700">
//                       JavaScript
//                     </span>

//                     <span className="text-slate-500">
//                       Frontend
//                     </span>
//                   </div>

//                   <div className="h-2 rounded-full bg-slate-100">
//                     <div className="h-2 w-3/4 rounded-full bg-blue-600" />
//                   </div>
//                 </div>

//                 {/* Node.js */}
//                 <div>
//                   <div className="mb-2 flex justify-between text-xs sm:text-sm">
//                     <span className="font-medium text-slate-700">
//                       Node.js
//                     </span>

//                     <span className="text-slate-500">
//                       Learning
//                     </span>
//                   </div>

//                   <div className="h-2 rounded-full bg-slate-100">
//                     <div className="h-2 w-2/5 rounded-full bg-blue-600" />
//                   </div>
//                 </div>

//                 {/* MongoDB */}
//                 <div>
//                   <div className="mb-2 flex justify-between text-xs sm:text-sm">
//                     <span className="font-medium text-slate-700">
//                       MongoDB
//                     </span>

//                     <span className="text-slate-500">
//                       Learning
//                     </span>
//                   </div>

//                   <div className="h-2 rounded-full bg-slate-100">
//                     <div className="h-2 w-1/3 rounded-full bg-blue-600" />
//                   </div>
//                 </div>

//               </div>

//               {/* Status */}
//               <div className="mt-6 rounded-xl bg-slate-50 p-4">
//                 <p className="text-sm font-medium text-slate-700">
//                   Currently learning
//                 </p>

//                 <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
//                   Node.js • Express • MongoDB • REST APIs
//                 </p>
//               </div>

//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero








import React from 'react'

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full overflow-hidden bg-slate-50"
    >
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-12 xl:px-16">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-350 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Side */}
          <div className="min-w-0 max-w-2xl">

            <p className="shimmer-text mb-3 text-xs font-semibold uppercase tracking-wider text-blue-600 sm:text-sm">
              {/* shimmer-text font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight mb- */}
              Frontend Developer
            </p>

            <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Hi, I'm Kenny.
              <br />
              I build{' '}
              <span className="text-blue-600">
                modern web applications.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              I'm a frontend developer focused on building clean, responsive,
              and user-friendly web experiences with React. I'm currently
              expanding my skills into backend development and full-stack
              applications.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 sm:px-6 sm:text-base"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600 sm:px-6 sm:text-base"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-7 flex items-center gap-5">
              <a
                href="#"
                className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
              >
                LinkedIn
              </a>
            </div>

          </div>

          {/* Right Side - Image Space */}
          <div className="flex w-full min-w-0 justify-center lg:justify-end">

            <div className="w-full max-w-md">

              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">

                {/* Image Placeholder */}
                <div className="flex aspect-4/5 w-full items-center justify-center bg-slate-100">

                  {/* <div className="text-center"> */}
                    {/* <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600">
                      K
                    </div> */}

                    {/* <p className="mt-4 text-sm font-medium text-slate-700"> */}
                      <img
                        src="/kenny.jpg"
                        alt="Kenny - Frontend Developer"
                        className="h-full w-full object-cover"
                      />
                    {/* </p> */}

                    {/* <p className="mt-1 text-xs text-slate-500">
                      Add your professional photo here
                    </p> */}
                  {/* </div> */}

                </div>

                {/* Developer Info */}
                <div className="border-t border-slate-200 bg-white p-5 sm:p-6">

                  <h2 className="text-lg font-bold text-slate-900">
                    Kenny.dev
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Frontend Developer
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      React
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      JavaScript
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      Tailwind CSS
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero