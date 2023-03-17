import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/userSlice";
<<<<<<< HEAD
import TweetModal from "./TweetModal";
=======
import { toggleDarkMode } from "../redux/darkModeSlice";
>>>>>>> 9a0049e3b32be221c8843d23ad523876f4f088d5

function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isDarkModeEnabled = useSelector((state) => state.darkMode);
  const [showOptions, setShowOptions] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  }

  return (
<<<<<<< HEAD
    <>
      <div style={{ position: "absolute" }}>
        <TweetModal handleClose={handleClose} show={show} />
      </div>
      <div className="sticky-top">
        {showOptions && (
          <div
            style={{
              position: "absolute",
              zIndex: "100",
              left: "15rem",
              bottom: "10px",
            }}
          >
            <button
              onClick={() => dispatch(logOut())}
              className="d-flex justify-content-center"
              style={{ backgroundColor: "#f01d1d00", border: "none" }}
            >
=======
    <div className={`sticky-top ${isDarkModeEnabled ? 'darkMode' : 'whiteMode'} `}>
      {showOptions && (
        <div
          style={{
            position: "absolute",
            zIndex: "100",
            left: "15rem",
            bottom: "10px",
          }}
        >
          <button
            onClick={() => dispatch(logOut())}
            className="d-flex justify-content-center"
            style={{ backgroundColor: "#f01d1d00", border: "none" }}
          >
            <img
              style={{ width: "50px", backgroundBlendMode: "multiply" }}
              src="https://i.ibb.co/9HjCnvx/removal-ai-tmp-641209035fdb3.png"
              alt="user_icon"
            />
          </button>

        </div>
      )}
      <div
        className="absolute sticky-top d-grid justify-content-end py-3 pt-4 bg-white"
        style={{ height: "100vh", zIndex: "500" }}
      >
        {/*<!-- Nav top --> */}
        <div className="d-flex flex-column justify-content-between align-items-end">
          <div className="d-flex flex-column align-items-center gap-4">
            <Link to={"/"}>
              {/* <!--       Tweeter Anchor --> */}
>>>>>>> 9a0049e3b32be221c8843d23ad523876f4f088d5
              <img
                style={{ width: "50px", backgroundBlendMode: "multiply" }}
                src="https://i.ibb.co/9HjCnvx/removal-ai-tmp-641209035fdb3.png"
                alt="user_icon"
              />
<<<<<<< HEAD
            </button>
          </div>
        )}
        <div
          className="absolute sticky-top d-grid justify-content-end py-3 pt-4 bg-white"
          style={{ height: "100vh", zIndex: "500" }}
        >
          {/*<!-- Nav top --> */}
          <div className="d-flex flex-column justify-content-between align-items-end">
            <div className="d-flex flex-column align-items-center gap-4">
              <Link to={"/"}>
                {/* <!--       Tweeter Anchor --> */}
                <img
                  style={{ width: "30px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/768px-Twitter-logo.svg.png"
                  alt="logo_twitter"
                />
              </Link>
              {/*<!--       Home Anchor --> */}
              <Link to={"/"}>
                <img
                  style={{ width: "40px" }}
                  src="https://www.shareicon.net/data/512x512/2017/05/26/886463_home_512x512.png"
                  alt="home_icon"
                />
              </Link>
              {/*<!--       User Profile Anchor --> */}
              <Link to={`/${user.userName}`}>
                {" "}
                {/*Originalmente iba a: /:username/<%= user.username */}
                <img
                  style={{ width: "40px" }}
                  src="https://icons-for-free.com/iconfiles/png/512/human+person+user+icon-1320196276306824343.png"
                  alt="user_icon"
                />
              </Link>
              {/* <!--       New Tweet Anchor --> */}
              <button className="btn" onClick={handleShow}>
                <img
                  style={{ width: "100px" }}
                  src="https://beconnected.esafety.gov.au/pluginfile.php/69203/mod_resource/content/1/t26_c6_a4_p2.png"
                  alt="tweet_icon"
                />
              </button>
            </div>
          </div>
          {/*<!--   Nav logout --> */}
          <div className="d-flex flex-column justify-content-end">
            {/*<!--     LogOut Button -->*/}
            <button
              /* onClick={() => setShowOptions(!showOptions)} */
              onClick={() => dispatch(logOut())}
              className="d-flex justify-content-center"
              style={{ backgroundColor: "#f01d1d00", border: "none" }}
            >
              <div style={{ fontSize: "4rem", color: "#1d9bf0" }}>...</div>
            </button>
=======
            </Link>
            {/* <!--       New Tweet Anchor --> */}
            <Link to={"/"}>
              <img
                style={{ width: "100px" }}
                src="https://beconnected.esafety.gov.au/pluginfile.php/69203/mod_resource/content/1/t26_c6_a4_p2.png"
                alt="user_icon"
              />
            </Link>
             {/* <!-- Dark Mode --> */}
             <button className="btn" onClick={handleToggleDarkMode} style={{ display: 'none'}}>
             <img
                style={{ width: "60px", display: 'none' }}
                src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
                alt="user_icon"
                
                
              />

             </button>
           
>>>>>>> 9a0049e3b32be221c8843d23ad523876f4f088d5
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
