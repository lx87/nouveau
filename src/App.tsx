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
        {/* redirects */}
        <Route path="/" element={<Navigate to="/enfants-riches-deprimes" replace />} />
        <Route path="*" element={<Navigate to="/404" replace />} />

        {/* home */}
        <Route path="/enfants-riches-deprimes">
          <Route index element={<Home />} />
          <Route path="products" element={<Item />} />
        </Route>

        <Route path="/404" element={<NoMatch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
