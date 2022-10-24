import { useLocation } from "react-router-dom";

export const Redirect = () => {
  const location = useLocation();
  const { url } = location.state;
  if (url) window.location.href = url;

  return null;
};
