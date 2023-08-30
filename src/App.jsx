import Loader from "./components/loader/Loader";
import { useEffect, useState } from "react"
import Homescreen from "./screens/Home/Homescreen";
import Aboutus from "./screens/Aboutus";
import Welcome from "./screens/Welcome";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000) // Move the timeout value outside the array
  }, [])

  const routes = [
    // Set the "Welcome" screen as the root route ("/")
    // <Route path="/" element={<Welcome />} />,
    <Route path="/" element={<Homescreen />} />,
    <Route path="/about" element={<Aboutus />} />,
    // Add more routes as needed
  ]

  const router = createBrowserRouter(createRoutesFromElements(routes))

  return (
    <div className={` overflow-x-hidden w-[100vw] h-fit ${loading ? 'border-black': 'border-gray-500'}`}>
      {
        loading ? <Loader /> : (
          <div className="overflow-hidden flex flex-row">
            <RouterProvider router={router} />
          </div>
        )
      }
    </div>
  )
}

export default App;
