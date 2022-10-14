// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/login/userSlice";

export const Profile = () => {
  // const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(logout(), navigate("/", { replace: true }));
        }}
      >
        Logout
      </button>
    </div>
  );
};
