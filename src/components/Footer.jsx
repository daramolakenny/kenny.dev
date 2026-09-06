import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 px-4 py-8 sm:px-6 lg:px-12 xl:px-16">
      <div className="mx-auto flex w-full max-w-350 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        {/* Brand */}
        <div>
          <a
            href="#home"
            className="text-lg font-bold text-slate-900"
          >
            Kenny<span className="text-blue-600">.dev</span>
          </a>

          <p className="mt-1 text-sm text-slate-500">
            Frontend Developer building modern web applications.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-5">
          <a
            href="#about"
            className="text-sm text-slate-500 transition hover:text-blue-600"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-slate-500 transition hover:text-blue-600"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-slate-500 transition hover:text-blue-600"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-500 transition hover:text-blue-600"
          >
            Contact
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="mx-auto mt-6 w-full max-w-350 border-t border-slate-200 pt-5">
        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Kenny.dev. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer