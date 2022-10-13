import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/login/userSlice";

export const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);
  return (
    <div>
      <h1>Profile</h1>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
      <p>
        Favorite:
        {/* {user.favorite.map((x) => x + ",")} */}
      </p>
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
