import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <Router basename="/erd-shop/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
