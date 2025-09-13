import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import BlogList from "./pages/admin/BlogList";
import Comments from "./pages/admin/Comments";
import AddBlog from "./pages/admin/AddBlog";
import Login from "./components/admin/Login";

import { Toaster } from "react-hot-toast"
import "quill/dist/quill.snow.css";
import { UseAppContext } from "./context/AppContext";

function App() {

  const {token} = UseAppContext();

  return (
    <div>
      <Toaster/>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />

        {/* Admin Routes */}
        <Route path="/admin" element={token ? <Layout /> : <Login/>}>
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
