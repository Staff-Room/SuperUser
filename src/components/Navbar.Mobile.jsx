import React from 'react'

function NavbarMobile() {
  return (
    <>
    <div id="mobile-menu" className="fixed inset-0 z-50 bg-gray-800 dark:bg-gray-900 text-gray-100 lg:hidden hidden">
        <div className="p-4">
          <button id="menu-close" className="text-gray-400 dark:text-gray-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <nav className="p-4">
          <ul>
            <li>
              <a href="#users" className="block px-4 py-2 text-gray-100 hover:bg-gray-700">Users</a>
            </li>
            <li>
              <a href="/superuser/logs" className="block px-4 py-2 text-gray-100 hover:bg-gray-700">Logs</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-gray-100 hover:bg-gray-700">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-gray-100 hover:bg-gray-700">Profile</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-red hover:bg-gray-700 ">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default NavbarMobile
