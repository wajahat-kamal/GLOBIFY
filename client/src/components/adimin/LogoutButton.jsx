import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout", {
        withCredentials: true,
      });

      if (res.data.success) {
        
        navigate("/"); 
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <button
    onClick={handleLogout}
    className="inline-flex items-center justify-center gap-2 px-4 md:px-8 py-2  rounded-full text-md font-medium
               bg-primary text-white shadow-md hover:bg-primary/90 hover:shadow-lg
               transition-all duration-300"
  >
    <span>Logout</span>
  </button>
  );
}
