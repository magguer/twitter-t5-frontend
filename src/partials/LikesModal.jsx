import Modal from "react-bootstrap/Modal";
import SmallUser from "./SmallUser";

function LikesModal({ show, handleClose, likes }) {
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton style={{ background: "#1d9bf0" }}>
        <Modal.Title>
          <h2 className="text-center text-white" style={{ fontSize: "1.1rem" }}>
            ♥ Likes
          </h2>
        </Modal.Title>
      </Modal.Header>
      {likes.length !== 0 ? (
        <div className="py-4">
          {likes.map((like, i) => {
            return <SmallUser key={i} smallUser={like} />;
          })}
        </div>
      ) : (
        <div className="text-center p-4">
          <h3 className="fs-5">
            Este tweet aún no tiene likes. Sé el primero!
          </h3>
        </div>
      )}
    </Modal>
  );
}

export default LikesModal;
