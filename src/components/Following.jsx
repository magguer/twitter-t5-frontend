import SmallUser from "../partials/SmallUser";
import HeaderFollow from "../partials/HeaderFollow";

function Following({ userFollowing }) {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-10 d-flex flex-column border-top pt-4">
          {userFollowing.users.map((user) => {
            return <SmallUser key={user.id} smallUser={user} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Following;
