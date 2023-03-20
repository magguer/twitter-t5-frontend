import axios from "axios";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { edit } from "../redux/userSlice";
import { actualize } from "../redux/resetSlice";

function EditProfileModal({ show, handleClose, userProfile }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState(userProfile.username);
  const [firstname, setFirstname] = useState(userProfile.firstname);
  const [lastname, setLastname] = useState(userProfile.lastname);
  const [description, setDescription] = useState(userProfile.description);
  const [banner, setBanner] = useState(null);
  const [image, setImage] = useState(null);

  const patchUser = async (e) => {
    dispatch(edit({ username, firstname, lastname }));
    dispatch(actualize());
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("banner", banner);
    formData.append("description", description);
    formData.append("image", image);
    /*     formData.append("username", username); */
    e.preventDefault();
    await axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/usuarios/${userProfile._id}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    /*    window.history.replaceState(null, `${username}`, `/${username}`); */
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <form onSubmit={patchUser}>
        <div className="p-4">
          <div className="form-floating mb-3">
            <input
              onChange={(e) => setFirstname(e.target.value)}
              type="firstname"
              className="form-control"
              id="firstname"
              name="firstname"
              placeholder="name@example.com"
              value={firstname}
            />
            <label htmlFor="floatingInput">Firstname</label>
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={(e) => setLastname(e.target.value)}
              type="lastname"
              className="form-control"
              id="lastname"
              name="lastname"
              placeholder="name@example.com"
              value={lastname}
            />
            <label htmlFor="floatingInput">Lastname</label>
          </div>
          {/*           <div className="form-floating mb-3">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="username"
              className="form-control"
              id="username"
              name="username"
              placeholder="name@example.com"
              value={username}
            />
            <label htmlFor="floatingInput">Username</label>
          </div> */}
          <div className="form-floating mb-3">
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="name@example.com"
              value={description}
            />
            <label htmlFor="floatingInput">Description</label>
          </div>
          <hr />
          <div className="mb-3">
            <label className="fw-semibold m-2" htmlFor="floatingInput">
              Banner
            </label>
            <input
              onChange={(e) => setBanner(e.target.files[0])}
              multiple
              className="form-control"
              name="banner"
              id="banner"
              type="file"
            />
          </div>
          <div className="mb-3">
            <label className="fw-semibold m-2" htmlFor="floatingInput">
              Profile Image
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              multiple
              className="form-control"
              name="image"
              id="image"
              type="file"
            />
          </div>
        </div>
        <div className="p-4 d-flex gap-2 w-100 justify-content-end">
          <button
            className="btn"
            style={{ background: "red", color: "white" }}
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="btn"
            style={{ background: "#1d9bf0", color: "white" }}
            onClick={handleClose}
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default EditProfileModal;
