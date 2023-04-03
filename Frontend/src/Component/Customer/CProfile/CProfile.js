import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./CProfile.css";
import { logout } from "../../../actions/userAction";
import { toast } from "react-toastify";

const CProfile = ({ history }) => {
  const { user, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);

  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
    toast.success("Logout Successfully");
  }

  return (
    <>
      <div className="profileInfo">
        <div className="profileContainer">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                opacity: "1",
                fontSize: "2vmax",
                marginTop: "20px",
              }}
            >
              My Profile
            </h1>

            <img
              className="profile__img"
              src={user.avatar.url}
              alt={user.name}
            />
            <Link
              to="/editprofile"
              className="edit__profile"
              style={{
                margin: "10px 0 0 -70px",
                color: "#3B67FF",
                textDecoration: "none",
              }}
            >
              Edit Profile
            </Link>
          </div>
        </div>
        <div className="information">
          <div className="middle">
            <div className="info">
              <h4>Full Name:</h4>
              <p className="profile">{user.name}</p>
            </div>
            <div className="info">
              <h4>Email:</h4>
              <p className="profile">{user.email}</p>
            </div>
            <div className="info">
              <h4>Contact:</h4>
              <p className="profile">{user.mobile}</p>
            </div>
            <div className="info">
              <h4>Joined On:</h4>
              <p className="profile">{String(user.createdAt).substr(0, 10)}</p>
            </div>
            <div className="info">
              <h4>Address:</h4>
              <p className="profile">{String(user.Address)}</p>
            </div>
            <div className="info">
              <h4>Description:</h4>
              <p className="profile">{String(user.description)}</p>
            </div>

            <div className="change__info">
              <Link to="/me/update" className="settings">
                Change Password
              </Link>
              <button onClick={logoutUser} className="buttonlg">
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CProfile;
