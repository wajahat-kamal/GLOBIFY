import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import BlogList from "./pages/admin/BlogList";
import Comments from "./pages/admin/Comments";
import AddBlog from "./pages/admin/AddBlog";
import Login from "./components/adimin/Login";

import "quill/dist/quill.snow.css"

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />

        {/* Admin Routes */}
        <Route path="/admin" element={true ? <Layout /> : <Login/>}>
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
