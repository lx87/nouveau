import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Item from "./pages/ProductPage"
import NoMatch from "./pages/NoMatch"

function App() {
  return (
    <Router basename="/erd-shop/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Item />} />
        <Route path="404" element={<NoMatch />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
