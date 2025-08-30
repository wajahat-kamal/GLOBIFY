import Navbar from "./components/Navbar"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Navbar />
              <Blog />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App
