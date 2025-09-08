import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import BlogList from "./pages/admin/BlogList";
import Comments from "./pages/admin/Comments";
import AddBlog from "./pages/admin/AddBlog";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import "quill/dist/quill.snow.css"

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        {/* Admin Routes */}
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-blogs" element={<AddBlog />} />
          <Route path="blog-lists" element={<BlogList />} />
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
