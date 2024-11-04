import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Products from './pages/Products'
import Categories from './pages/Categories'
import User from './pages/User'
import NoPage from './pages/NoPage'
import Order from './pages/Order'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Categories />} />
          <Route path="product" element={<Products />} />
          <Route path="user" element={<User />} />
          <Route path='order' element={<Order />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}
