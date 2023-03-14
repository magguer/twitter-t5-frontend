import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
<div
  className="sticky-top d-grid justify-content-end py-3 pt-4"
  style = {{height: "100vh"}}
>
  {/*<!-- Nav top --> */}
  <div className="d-flex flex-column justify-content-between align-items-center">
    <div className="d-flex flex-column align-items-center justify-content-between">
      <div className="d-flex flex-column align-items-center gap-4">
        <Link to={"/"}>
            {/* <!--       Tweeter Anchor --> */}
            <img
            style = {{width: "30px"}}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/768px-Twitter-logo.svg.png"
            alt="logo_twitter"
          />

        </Link>
        {/*<!--       Home Anchor --> */}
        <Link to={"/"}>
          <img
            style={{width: "40px"}}
            src="https://www.shareicon.net/data/512x512/2017/05/26/886463_home_512x512.png"
            alt="home_icon"
          />
        </Link>
        {/*<!--       User Profile Anchor --> */}
        <Link to={"/:username"}>  {/*Originalmente iba a: /:username/<%= user.username */}
          <img
            style={{width: "40px"}}
            src="https://icons-for-free.com/iconfiles/png/512/human+person+user+icon-1320196276306824343.png"
            alt="user_icon"
          />
        </Link>
        {/* <!--       New Tweet Anchor --> */}
        <Link to={"/"}>
          <img
            style={{width: "100px"}}
            src="https://beconnected.esafety.gov.au/pluginfile.php/69203/mod_resource/content/1/t26_c6_a4_p2.png"
            alt="user_icon"
          />
        </Link>
      </div>
    </div>
    {/*<!--   Nav logout --> */}
    <div className="d-flex flex-column justify-content-end">
     {/*<!--     LogOut Button -->*/} 
      <form action="/logout" method="post">
        <button
          className="d-flex justify-content-center"
          style= {{backgroundColor : "#f01d1d00", border: "none"}}
        >
          <img
            style = {{width: "50px"}}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5hU53Jw6nWu4UJ6H1tZXA9vqG7lzKzOz_QEdcRW-CKxMu81kF87iOI4TYZ5ymzkFwEo&usqp=CAU"
            alt="user_icon"
          />
        </button>
      </form>
    </div>
  </div>
</div>


    
    </>
  )
}

export default Header