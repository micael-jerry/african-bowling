import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const MyModal = (props) => {
  const { isVisible, handleSave, handleClose, header, children } = props;

  return (
    <Modal show={isVisible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

MyModal.propTypes = {
  isVisible: PropTypes.bool,
  handleSave: PropTypes.func,
  handleClose: PropTypes.func,
  header: PropTypes.string,
  children: PropTypes.node,
};

export default MyModal;
