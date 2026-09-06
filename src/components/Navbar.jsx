import React, { useState } from 'react'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const closeMenu = () => {
    setOpenMenu(false)
  }

  return (
    <nav className="w-full bg-white">
      <div className=" w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Navbar */}
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="shrink-0 text-xl font-bold text-slate-900"
          >
            Kenny<span className="text-blue-600">.dev</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden shrink-0 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 md:block"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggleMenu}
            className="text-2xl text-slate-800 md:hidden"
            aria-label="Toggle menu"
          >
            {openMenu ? '✕' : '☰'}
          </button>

        </div>

        {/* Mobile Navigation */}
        {openMenu && (
          <div className="border-t border-slate-100 py-4 md:hidden">
            <div className="flex flex-col gap-1">

              <a
                href="#home"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-blue-700"
              >
                Let's Talk
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar