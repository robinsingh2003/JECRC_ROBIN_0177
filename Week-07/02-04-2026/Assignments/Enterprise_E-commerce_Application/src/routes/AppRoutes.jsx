import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/Dashboardlayout";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import DashboardHome from "../pages/dashboard/DashboardHome";
import Analytics from "../pages/dashboard/Analytics";
import Settings from "../pages/dashboard/Settings";

import ProductList from "../pages/products/ProductList";
import ProductDetails from "../pages/products/ProductDetails";
import Reviews from "../pages/products/Reviews";
import Specs from "../pages/products/specs";

import ProtectedRoute from "../routes/ProtectedRoutes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* AUTH */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* PRODUCTS */}
        <Route path="/products" element={<MainLayout />}>
          <Route index element={<ProductList />} />
          <Route path=":productId" element={<ProductDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="specs" element={<Specs />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}