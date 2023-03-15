import SmallUser from "../partials/SmallUser";

function Following({ userFollowing }) {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-10 d-flex flex-column border-top pt-4">
          {userFollowing.usersFollowing.map((user, i) => {
            return <SmallUser key={i} smallUser={user} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Following;
