import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../../redux/userSlice";

export default function LogoutButton() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  const confirmLogout = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout", {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(clearUser());
        setShowPopup(false);
        navigate("/");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <>
      {/* Logout Button */}
      <button
        onClick={() => setShowPopup(true)}
        className="inline-flex items-center justify-center gap-2 px-4 md:px-8 py-2 rounded-full text-md font-medium
                   bg-primary text-white shadow-md hover:bg-primary/90 hover:shadow-lg
                   transition-all duration-300"
      >
        <span>Logout</span>
      </button>

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-indigo-100 rounded-2xl shadow-xl p-6 text-center max-w-sm w-full">
            <h2 className="text-lg font-semibold text-gray-800">
              Are you sure you want to logout?
            </h2>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={confirmLogout}
                className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
              >
                Logout
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 rounded-lg bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
