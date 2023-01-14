import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './pages/Main/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<HomePage/>
    }
  ])

  return (
    <RouterProvider router={router}>
    <div className="App">
      <HomePage/>
      </div>
      </RouterProvider>
  )
}

export default App