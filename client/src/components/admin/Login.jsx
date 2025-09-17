import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";
import { UseAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const { axios, setToken, navigate } = UseAppContext();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/admin/login", formData);

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
      <div
        className="
          w-full max-w-md p-8
          rounded-2xl border border-white/20
          bg-white/60 backdrop-blur-lg
          shadow-2xl
        "
      >
        {/* ---------- Header ---------- */}
        <div className="mb-8 flex items-center">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="
              p-2 rounded-full hover:bg-white/50 transition
              text-gray-600 hover:text-gray-800
            "
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-extrabold text-gray-800">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Admin
              </span>{" "}
              Login
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Sign in to manage your blog dashboard
            </p>
          </div>
        </div>

        {/* ---------- Form ---------- */}
        <form onSubmit={handleSubmit} className="space-y-6">
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
                className="
                  w-full pl-10 pr-4 py-2 rounded-lg
                  border border-gray-300
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300
                  outline-none text-gray-700 placeholder-gray-400
                  transition duration-200
                "
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
                className="
                  w-full pl-10 pr-10 py-2 rounded-lg
                  border border-gray-300
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300
                  outline-none text-gray-700 placeholder-gray-400
                  transition duration-200
                "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute right-3 top-1/2 -translate-y-1/2
                  text-gray-400 hover:text-gray-600 transition
                "
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full py-3
              bg-gradient-to-r from-indigo-500 to-purple-600
              text-white font-semibold text-lg rounded-lg
              shadow-md
              hover:shadow-xl hover:scale-[1.02]
              transition-all duration-300
            "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
