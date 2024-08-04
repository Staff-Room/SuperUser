import React from 'react'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/Navbar.Mobile'


export default function Profile() {
  return (
    <>
    <div className=" font-sans bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 md:px-28 2xl:px-72 px-4"><div className="flex min-h-screen">
   
    <Navbar/>

   
    <main className="flex-grow p-4 lg:p-8 bg-gray-50 dark:bg-zinc-950">
      <div className="flex items-center justify-between mb-4 lg:hidden">
        <h1 className="text-2xl font-bold">Profile</h1>
        <button id="menu-toggle" className="text-gray-500 dark:text-gray-400 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>

      
      <NavbarMobile/>

      <section>
        <h2 className="text-xl font-semibold mb-4">Center Information</h2>
        <div className="bg-white dark:bg-zinc-900 border p-6">
          <ul>
            <li className="mb-2"><span className="font-medium pr-2">Name:</span >  center.centerName   </li>
            <li className="mb-2"><span className="font-medium pr-2">Id:</span> center.centerId  </li>
            <li className="mb-2"><span className="font-medium pr-2">Email:</span> center.centerEmail  </li>
            <li className="mb-2"><span className="font-medium pr-2">Address:</span> center.centerAddress   </li>
            <li className="mb-2"><span className="font-medium pr-2">Admin</span> center.admin  </li>
            <li className="mb-2"><span className="font-medium pr-2">Edcatores</span> center.edcatores  </li>
            <li className="mb-2"><span className="font-medium pr-2">Students</span> center.students  </li>
           +<li className="mb-2"><span className="font-medium pr-2">Disk Space:</span> 256GB SSD</li> 
          </ul>
        </div>
      </section>
     
    </main>
  </div>

  
</div></>
  )
}
