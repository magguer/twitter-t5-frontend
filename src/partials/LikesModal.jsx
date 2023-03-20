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
      <Modal.Header closeButton>
        <Modal.Title>
          <h2 className="text-center" style={{ fontSize: "1.1rem" }}>
            Likes ♥
          </h2>
        </Modal.Title>
      </Modal.Header>
      <div className="p-4">
        {likes.map((like, i) => {
          return <SmallUser key={i} smallUser={like} />;
        })}
      </div>
    </Modal>
  );
}

export default LikesModal;
