import React from 'react'
import { Link } from 'react-router-dom'

function Verification() {
  return (
    <>
    <div className="bg-gray-50 flex flex-col min-h-screen">

<main
  className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8"
>
  <div className="max-w-md w-full space-y-4">
    <div>
    
      <h1 className="mt-6 text-center text-4xl font-bold text-gray-900">
        Mkcl Admin
      </h1>
      <p className="mt-2 text-center text-sm text-gray-600">
        We've sent a Verification link to your <span className="bg-indigo-600"></span> . Please check
        your inbox and click the link to verify your account.
      </p>
    </div>
    
      
      <div className="flex justify-center" >
        <div  className="group relative flex justify-center py-2 px-4 border border-transparent  rounded-md text-white bg-gray-800 hover:bg-indigo-700 focus:outline-none ">
         <Link to="/dashboard" >
            <button
            type="submit"
            
           className="text-sm font-medium"
          >
           Open Inbox
          </button>
         </Link>
        
        </div>
      </div>
  </div>
</main>

</div></>
  )
}

export default Verification
