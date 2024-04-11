import React from 'react'
import logo from '../assets/logo.png'
// by using link the page doesn't show signs of loading just changes in same page.
// if you want signs of loading remove Link and change <Link> -> <a>
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* Logo */}
              <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                <img className="h-10 w-auto" src={ logo } alt="React Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  React Jobs
                </span>
              </a>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <Link
                    to="/"
                    className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >
                    Home
                  </Link>
                  <Link
                    to="/jobs"
                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >
                    Jobs
                  </Link>
                  <Link
                    to="/add-job"
                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >
                    Add Job
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar