import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { edit } from "../redux/userSlice";
import { actualize } from "../redux/resetSlice";

function EditProfileModal({ show, handleClose, userProfile }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [username] = useState(userProfile.username);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [description, setDescription] = useState("");
  const [verify, setVerify] = useState("");
  const [banner, setBanner] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    setFirstname(userProfile.firstname);
    setLastname(userProfile.lastname);
    setDescription(userProfile.description);
    setVerify(userProfile.verify);
  }, [userProfile]);

  const patchUser = async (e) => {
    dispatch(edit({ username, firstname, lastname }));
    dispatch(actualize());
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("banner", banner);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("verify", verify);
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
    handleClose();
  };

  const handleVerify = () => {
    setVerify(!verify);
  };

  return (
    <Modal
      className="p-0"
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
      animation={true}
    >
      <Modal.Header closeButton style={{ background: "#1d9bf0" }}>
        <Modal.Title>
          {" "}
          <h2 className="text-center text-white" style={{ fontSize: "1.3rem" }}>
            ✒ Edit Profile
          </h2>
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="pt-4 px-4">
          {/*   User Info */}
          <div className="d-flex w-100 justify-content-between">
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
          </div>
          <div className="form-floating">
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              style={{ height: "80px" }}
              className="form-control"
              id="description"
              name="description"
              placeholder="name@example.com"
              value={description}
            />
            <label htmlFor="floatingInput">Description</label>
          </div>
          {/*   Images Info */}
          <div className="d-flex align-items-center">
            <div>
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
            <div className="mt-4">
              <img
                className="rounded-pill ms-4 border border-5 border-white"
                style={{
                  height: "5rem",
                  width: "5rem",
                  borderStyle: "solid",
                  borderColor: "white",
                  objectFit: "cover",
                }}
                src={
                  userProfile.image.includes("http")
                    ? userProfile.image
                    : `${process.env.REACT_APP_API_URL}/img/${userProfile.image}`
                }
                alt="img"
              />
            </div>
          </div>
          <div className="mb-2">
            <label className="fw-semibold ms-2 mb-2" htmlFor="floatingInput">
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
          {/*   Verify Info */}
          {!verify ? (
            <div className="w-100 d-flex mt-4 justify-content-center align-items-center gap-4">
              <button
                onClick={handleVerify}
                style={{ background: "#1d9bf0", color: "white" }}
                className="btn"
              >
                Verify
              </button>
              <h3
                className="m-0"
                style={{ fontSize: "1rem", fontWeight: "500" }}
              >
                Verify your account for only $29.99
              </h3>
            </div>
          ) : (
            <div className="w-100 d-flex mt-4 justify-content-center align-items-center gap-4">
              <button
                onClick={handleVerify}
                style={{ background: "white" }}
                className="btn border"
              >
                Unverify
              </button>
              <h3
                className="m-0"
                style={{ fontSize: "1rem", fontWeight: "500" }}
              >
                Cancel your verify profile.
              </h3>
            </div>
          )}
        </div>
        <div className="p-4 d-flex gap-2 w-100 justify-content-end">
          <button
            className="btn border"
            style={{ background: "white", color: "black" }}
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="btn"
            style={{ background: "#1d9bf0", color: "white" }}
            onClick={patchUser}
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default EditProfileModal;
