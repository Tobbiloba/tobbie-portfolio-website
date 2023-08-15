import Loader from "./components/loader/Loader";
import { useEffect, useState } from "react"
import Homescreen from "./screens/Homescreen";
function App() {
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, [4000])
  }, [])
  return (
    <>
    {
      loading ? <Loader /> : <div>
        <Homescreen />
      </div>
    }
    </>
  )
}

export default App
