import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SiginIn from './pages/signin'
import Verification from './pages/verification'
import Dashboard from './pages/dashboard'
import Educatores from './pages/educatores'
import Students from './pages/students'
import Batches from './pages/batches'
import Setting from './pages/setting'
import Profile from './pages/profile'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<SiginIn/>
    },
    {
      path:'/verification',
      element:<Verification/>
    },
    {
      path:'/dashboard',
      element:<Dashboard/>
    },
    {
      path:'/educatores',
      element:<Educatores/>
    },
    {
      path:'/students',
      element:<Students/>
    },
    {
      path:'/batches',
      element:<Batches/>
    },
    {
      path:'/settings',
      element:<Setting/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
