
import './App.css'
import {  RouterProvider } from 'react-router-dom'
import { routes } from './layouts/Routes'

function App() {
  const router = routes;
  return (
    <RouterProvider router={router}>
    
      </RouterProvider>
  )
}

export default App
