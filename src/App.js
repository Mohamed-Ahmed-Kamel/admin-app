import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard.js";
import Login from "./pages/Login.js";
import ResetPassword from "./pages/ResetPassword.js";
import ForgotPassword from "./pages/ForgotPassword.js";
import Enquiries from "./pages/Enquiries.js";
import BlogList from "./pages/BlogList.js";
import AddBlog from "./pages/AddBlog.js";
import BlogCatList from "./pages/BlogCatList.js";
import AddBlogCat from "./pages/AddBlogCat.js";
import Orders from "./pages/Orders.js";
import Customers from "./pages/Customers.js";
import AddColor from "./pages/AddColor.js";
import ColorList from "./pages/ColorList.js";
import AddCat from "./pages/AddCat.js";
import CategoryList from "./pages/CategoryList.js";
import BrandList from "./pages/BrandList.js";
import ProductList from "./pages/ProductList.js";
import AddProduct from "./pages/AddProduct.js";

import MainLayout from "./components/MainLayout.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="blog" element={<AddBlog />} />
          <Route path="blog-category" element={<AddBlogCat />} />
          <Route path="blog-category-list" element={<BlogCatList />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="color" element={<AddColor />} />
          <Route path="list-color" element={<ColorList />} />
          <Route path="category" element={<AddCat />} />
          <Route path="list-category" element={<CategoryList />} />
          <Route path="list-brand" element={<BrandList />} />
          <Route path="list-product" element={<ProductList />} />
          <Route path="product" element={<AddProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

// CategoryList.js
// BrandList.js
// ProductList.js