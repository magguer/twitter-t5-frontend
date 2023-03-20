import SmallUser from "../partials/SmallUser";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderFollow from "../partials/HeaderFollow";
import { useEffect, useState } from "react";
import axios from "axios";

function Following() {
  const userProfile = useParams();
  const reset = useSelector((state) => state.reset);
  const user = useSelector((state) => state.user);

  const [userFollowing, setUserFollowing] = useState(null);

  //Llamado de Followings
  useEffect(() => {
    const getFollowing = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "get",

        url: `${process.env.REACT_APP_API_URL}/usuarios/${userProfile.username}/following`,
      });
      setUserFollowing(response.data);
    };
    getFollowing();
  }, [reset]); // eslint-disable-line

  return (
    <>
      {userFollowing ? (
        <>
          <div>
            <HeaderFollow userProfile={userFollowing.userParamsFollowing} />
          </div>

          <div className="d-flex justify-content-around">
            <div>
              <div
                style={{
                  opacity: "0%",
                  background: "#1d9bf0",
                  width: "100px",
                  height: "4px",
                  marginTop: "8px",
                }}
              ></div>
            </div>
            <div>
              <div
                style={{
                  background: "#1d9bf0",
                  width: "100px",
                  height: "4px",
                  marginTop: "8px",
                }}
              ></div>
            </div>
          </div>

          <div className="row d-flex justify-content-center w-100 m-0">
            <div className="col-10 d-flex flex-column border-top pt-4 w-100">
              {userFollowing.usersFollowing.map((user, i) => {
                return <SmallUser key={i} smallUser={user} />;
              })}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Following;
