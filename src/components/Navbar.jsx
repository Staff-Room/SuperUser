import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <aside className="w-64 bg--gray-50 dark:bg-zinc-950 divide-x-4 border-r-2 dark:border-gray-700 hidden lg:block">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Mkcl Admin</h2>
      </div>
      <nav className="mt-5">
        <ul >
          <li>
            <Link to="/dashboard" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700">Dashboard</Link>
          </li>
          <li>
            <Link to="/educatores" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700">Educatores</Link>
          </li>
          <li>
            <Link to="/batches" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700">Batches</Link>
          </li>
          <li>
            <Link to="/students" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700">Students</Link>
          </li>
          <li>
            <Link to="/profile" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 
            dark:hover:bg-gray-700">Profile</Link>
          </li>
          <li>
            <Link to="/settings" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200
             dark:hover:bg-gray-700">Settings</Link>
          </li>
          
        
        
        <li>
            <Link to="/" className="block px-4 py-2 text-red-500 dark:text-gray-white hover:text-white hover:bg-red-500 dark:hover:bg-gray-700">Logout</Link>
          </li>
        </ul>
      </nav>
    </aside>
    </>
  )
}

export default Navbar
