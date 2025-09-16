import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn, ArrowBigLeft, ArrowLeft } from "lucide-react";
import { UseAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const {axios, setToken} = UseAppContext();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/admin/login", { email: formData.email, password: formData.password });
  
      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = `${data.token}`;
  
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-8 flex">
          <div >
            <ArrowLeft/>
          </div>
          <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="text-primary">Admin</span> Login
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            login to manage your blog dashboard
          </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="admin@example.com"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-gray-700"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-medium py-2 rounded-lg shadow-md hover:bg-primary/90 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
