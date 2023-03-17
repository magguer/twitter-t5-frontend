import SmallUser from "../partials/SmallUser";

function Following({ userFollowing }) {
  return (
    <>
      <div className="row d-flex justify-content-center w-100 m-0">
        <div className="col-10 d-flex flex-column border-top pt-4 w-100">
          {userFollowing.usersFollowing.map((user, i) => {
            return <SmallUser key={i} smallUser={user} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Following;
