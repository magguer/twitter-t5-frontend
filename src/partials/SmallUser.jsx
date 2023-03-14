import React from 'react'
import { Link } from 'react-router-dom'

function SmallUser() {
  return (
    <>
    <div className="d-flex w-100 align-items-center px-4 py-2">
  {/* Info Usuario */}
  <div className="d-flex align-items-center gap-3 w-100">
    {/* Imagen Usuario */}
    <Link to = {`/:username}`}> {/*  Link to = {`/usuarios/${user.username}`}*/}
     {/* {smallUser.image.includes('http') ? ( */} 
        <img
          style={{ width: '2.5rem' }}
          className="figure-img img-fluid rounded-pill align-self-center"
          alt="image"
        />  {/* src={smallUser.image} */}
     {/*) : ( */} 
        <img
          style={{ width: '2.5rem' }}
          className="figure-img img-fluid rounded-pill align-self-center"
          alt="image"
          
        /> {/*src={`/img/${smallUser.image}`} */}
     {/*)} */} 
    </Link>
    {/* Desc. Usuario */}
    <div>
      <Link className="text-decoration-none text-black" > {/* to={`/usuarios/${smallUser.username}`} */}
        <h6 className="mb-0 p-0">
            {/* {smallUser.firstname} {smallUser.lastname} */}
        </h6>
      </Link>
      <p className="p-0 m-0" style={{ fontSize: '0.8rem', color: '#969696' }}>
        {/* @{smallUser.username} */}
      </p>
    </div>
  </div>
  {/* const userFollowing = globalUser.following.some((u) => u.id === smallUser.id) */}
  {/* Boton Follow */}
  {/*{smallUser.id !== globalUser.id && ( */}
    <>
      {/* Si el usuario no sigue, mostrar boton de seguir */}
      {/*{!userFollowing ? ( */}
        <div className="justify-content-end">
          <form> {/* action={`/usuarios/${smallUser._id}/follow?_method=put`} method="post" */}
            <button
              type="submit"
              className="btn rounded-pill"
              style={{ backgroundColor: '#1d9bf0', color: 'white' }}
            >
              Follow
            </button>
          </form>
        </div>
      {/* ) : ( */}
        {/*  Si el usuario ya lo sigue, mostrar el boton de unfollow */}
        <div className="justify-content-end">
          <form> {/*action={`/usuarios/${smallUser._id}/unfollow?_method=put`} method="post" */}
            <button
              type="submit"
              className="btn rounded-pill border"
              style={{ backgroundColor: '#ffffff', color: 'rgb(0, 0, 0)' }}
            >
              Unfollow
            </button>
          </form>
        </div>
     {/*)} */} 
    </>
 {/* )} */} 
</div>


    </>
  )
}

export default SmallUser