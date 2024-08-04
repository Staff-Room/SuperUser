import { Link } from "react-router-dom"

function SiginIn() {
    return (
        <>
        <div className="bg-gray-50 flex flex-col min-h-screen">
    
    <main
      className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8">
        <div>
        
          <h1 className="mt-6 text-center text-4xl font-bold text-gray-900">
            Mkcl Admin
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            We've sent a verification link to your email address. Please check
            your inbox and click the link to verify your account.
          </p>
        </div>
        <form method="POST" action="/admin">
          
          <div className="mt-8 space-y-6" >
          
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
             <Link to='/verification'><button
                type="submit"
                
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button></Link>
            </div>
          </div>
        </form>
      </div>
    </main>
    </div>
        </>
      )
    }
    
    export default SiginIn
    