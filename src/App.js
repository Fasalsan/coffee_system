// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import Login from './auth/Login';
import SalesOrder from './pages/SalesOrder';
import ProtectedRoute from './auth/ProtectedRoute';
import Layout from './components/Layout';
import Categories from './pages/Categories';
import Product from './pages/Products';
import User from './pages/User';
import Order from './pages/Order';
import NoPage from './pages/NoPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Categories />} />
            <Route path="product" element={<Product />} />
            <Route path="user" element={<User />} />
            <Route path="order" element={<Order />} />
            <Route path="salesorder" element={<SalesOrder />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
