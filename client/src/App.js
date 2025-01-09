import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';
import Admin from './pages/Admin';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './pages/Profile';
import Product from './pages/Product';

function App() {
  const location = useLocation(); // Get current route path

  // Define routes where Navbar and Footer should not appear
  const hideNavbarFooterRoutes = ['/admin'];

  const shouldHideNavbarFooter = hideNavbarFooterRoutes.includes(location.pathname);

  return (
    <div className="App">
      {/* Conditionally render Navbar and Footer */}
      {!shouldHideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {!shouldHideNavbarFooter && <Footer />}
    </div>
  );
}

// Wrap App with BrowserRouter in the root component (index.js or elsewhere)
const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWithRouter;
