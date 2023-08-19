import Loader from "./components/loader/Loader";
import { useEffect, useState } from "react"
import Homescreen from "./screens/Homescreen";
import Aboutus from "./screens/Aboutus";
import { Navbar } from "./components/navbar/Navbar";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, [1000])
  }, [])
  return (
    <>
    {
      loading ? <Loader /> : <div className="overflow-hidden flex flex-row">
        <div>
          <Navbar />
          
        </div>
          
        
        <div>
          <Homescreen />
        </div>
      </div>
    }
    </>
  )
}

export default App
