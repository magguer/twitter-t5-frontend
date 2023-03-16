import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderFollow from "../partials/HeaderFollow";
import Followers from "./Followers";
import Following from "./Following";

function FollowPage() {
  const userProfile = useParams();
  const reset = useSelector((state) => state.reset);
  const user = useSelector((state) => state.user);

  const [userFollowers, setUserFollowers] = useState(null);
  const [userFollowing, setUserFollowing] = useState(null);

  const [showFollowers, setShowFollowers] = useState(true);

  //Llamado de Followers
  useEffect(() => {
    const getFollowers = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
        method: "get",

        url: `http://localhost:8000/usuarios/${userProfile.username}/followers`,
      });
      setUserFollowers(response.data);
    };
    getFollowers();
  }, [reset]); // eslint-disable-line

  //Llamado de Followings
  useEffect(() => {
    const getFollowing = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
        method: "get",

        url: `http://localhost:8000/usuarios/${userProfile.username}/following`,
      });
      setUserFollowing(response.data);
    };
    getFollowing();
  }, [reset]); // eslint-disable-line

  return (
    <>
      {userFollowers && userFollowing ? (
        <>
          <div>
            <HeaderFollow
              setShowFollowers={setShowFollowers}
              showFollowers={showFollowers}
              userFollowing={userFollowing.userParamsFollowing}
            />
          </div>
          {showFollowers ? (
            <div>
              <Followers userFollowers={userFollowers} />
            </div>
          ) : (
            <div>
              <Following userFollowing={userFollowing} />
            </div>
          )}
        </>
      ) : null}
    </>
  );
}

export default FollowPage;
