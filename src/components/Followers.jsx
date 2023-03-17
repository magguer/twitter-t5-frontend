import SmallUser from "../partials/SmallUser";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderFollow from "../partials/HeaderFollow";
import { useEffect, useState } from "react";
import axios from "axios";

function Followers() {
  const userProfile = useParams();
  const reset = useSelector((state) => state.reset);
  const user = useSelector((state) => state.user);

  const [userFollowers, setUserFollowers] = useState(null);

  //Llamado de Followers
  useEffect(() => {
    const getFollowers = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/usuarios/${userProfile.username}/followers`,
      });
      setUserFollowers(response.data);
    };
    getFollowers();
  }, [reset]); // eslint-disable-line

  return (
    <>
      {userFollowers ? (
        <>
          <div>
            <HeaderFollow userProfile={userFollowers.userParamsFollowers} />
          </div>
          <div className="d-flex justify-content-around">
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
          </div>
          <div className="row d-flex justify-content-center w-100 m-0">
            <div className="col-10 d-flex flex-column border-top pt-4 w-100">
              {userFollowers.usersFollowers.map((user, i) => {
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

export default Followers;
