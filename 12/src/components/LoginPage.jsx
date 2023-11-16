import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogin = () => {
    setUser({
      id: 313,
      name: "Yulean Alvarez",
      email: "yulean.alvarez@uao.edu.co"
    });

    const lastPath = localStorage.getItem("lastPath") || "/";
    navigate(lastPath, {
      replace: true
    });
  };

  const onLogout = () => {
    setUser(null);
    navigate("/login", {
      replace: true
    });
  };

  return (
    <>
      {user ? (
        <div>
          <div>Welcome {user.name}!</div>
          <button className="btn btn-danger" onClick={() => onLogout()}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <div> Login Page </div>
          <pre>{JSON.stringify(user, null, 3)}</pre>
          <button className="btn btn-primary" onClick={() => onLogin()}>
            Login
          </button>
        </div>
      )}
    </>
  );
};

export const PublicPage = () => {
  return (
    <>
      <div>Public Page</div>
    </>
  );
};

export const PrivatePage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login", {
      replace: true
    });
    return null;
  }

  return (
    <>
      <div>Private Page</div>
    </>
  );
};
