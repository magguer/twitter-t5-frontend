import React from 'react'

function TweetProfile() {
  return (
    <>
    <div className="d-flex w-100 p-3 border-top border-success border-opacity-50">
  {/* Imagen Usuario */}
  <a style={{marginRight: "14px"}} href={`/usuarios/${tweet.user.username}`}>
    {userProfile.image.includes("http") ? (
      <img
        style={{width: "2.5rem"}}
        className="figure-img img-fluid rounded-pill align-self-center"
        alt="image"
        src={userProfile.image}
      />
    ) : (
      <img
        style={{width: "2.5rem"}}
        className="figure-img img-fluid rounded-pill align-self-center"
        alt="image"
        src={`/img/${userProfile.image}`}
      />
    )}
  </a>
  {/* Nombre y Apellido del Usuario */}
  <div className="d-flex flex-column w-100">
    <div className="d-flex align-items-center gap-1">
      <a
        href={`/usuarios/${userProfile.username}`}
        className="text-decoration-none text-black fw-semibold mb-0 p-0"
      >
        {userProfile.firstname} {userProfile.lastname}
      </a>
      <small className="p-0 m-0" style={{fontSize: "0.8rem", color: "#969696"}}>
        @{userProfile.username}
      </small>
      {/* Fecha Tweet */}
      <small className="p-0 m-0" style={{fontSize: "0.8rem", color: "#969696"}}>
        {/* comment */}
        · {formatDistance(new Date(), tweet.createdAt, {locale: en})}
      </small>
    </div>
    {/* Contenido del usuario */}
    <div className="d-flex">
      <p>{tweet.text}</p>
    </div>
    <div className="d-flex align-items-center justify-content-between w-100">
      {/* Boton de Like */}
      <div className="d-flex align-items-center gap-2">
        {/* comment */}
        {/* {const userLike = tweet.likes.some((u) => String(u) === user.id)}*/}
        {/* comment */}
        {userLike ? (
          /* con el if(!userLike agrega Likes) */
          /* de lo contrario if (userLike saca Likes) */
          <form
            action={`/usuarios/tweets/${tweet._id}/remove?_method=put`}
            method="post"
          >
            <button
              type="submit"
              className="border border-white bg-white m-0 p-0 d-flex align-items-center"
            >
              <img
                src="https://svgur.com/i/qen.svg"
                className="img-fluid object-fit"
                style={{width: "1.2rem"}}
                alt="heart-white"
              />
            </button>
          </form>
        ) : (
          <form
            action={`/usuarios/tweets/${tweet._id}/add?_method=put`}
            method="post"
          >
            <button
              type="submit"
              className="border border-white bg-white m-0 p-0 d-flex align-items-center"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2961/2961957.png"
                className="img-fluid object-fit"
                style={{width: "1.2rem"}}
                alt="heart-white"
              />
            </button>
          </form>
        )}

        <h2 style={{fontSize: "1rem", color: "#000000"}} className="m-0">
          {tweet.likes.length}
        </h2>
      </div>
      {/* Boton de Borrar con MethodOverride DELETE */}
      {/* user: usuario global logeado, userProfile: el perfil del usuario q entras */}
      {user.username === userProfile.username && (
        <form action={`/usuarios/${tweet._id}?_method=delete`} method="post">
          <button
            type="submit"
            className="border border-white bg-white m-0 p-0 d-flex align-items-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
              className="img-fluid object-fit"
              style={{ width: '1.2rem' }}
              alt="trash-can"
            />
          </button>
        </form>
      )}
</div>
</div>
</div>


    </>
  )
}

export default TweetProfile