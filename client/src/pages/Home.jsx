import { useNavigate } from "react-router-dom";

import { AppData } from "../context/AppContext";

const Home = () => {
  const { logoutUser } = AppData();

  const navigate = useNavigate();

  return (
    <div className="flex w-25 m-auto mt-40">
      <button
        className="bg-red-500 text-white p-2 rounded-md"
        onClick={() => logoutUser(navigate)}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
