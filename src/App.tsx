import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Item from "./pages/ProductPage"
import NoMatch from "./pages/NoMatch"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/enfants-riches-deprimes" replace />} />

        <Route path="/enfants-riches-deprimes">
          <Route index element={<Home />} />
          <Route path="products" element={<Item />} />
        </Route>

        <Route path="404" element={<NoMatch />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
