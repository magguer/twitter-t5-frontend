import SmallUser from "../partials/SmallUser";
import { useParams } from "react-router-dom";

function Followers({ userFollowers }) {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-10 d-flex flex-column border-top pt-4">
          {userFollowers.usersFollowers.map((user, i) => {
            return <SmallUser key={i} smallUser={user} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Followers;
