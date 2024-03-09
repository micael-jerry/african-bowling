import PropTypes from "prop-types";
import MyModal from "../MyModal";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

const AddScoreDialog = (props) => {
  const { isVisible, handleSave, handleClose, scores } = props;

  const frameNumberRef = useRef(null);
  const launchNumberRef = useRef(null);
  const pinsNumberRef = useRef(null);
  const handleSaveScores = () => {
    let score = scores[frameNumberRef.current.value];
    if (!score) score = { 1: 0, 2: 0, 3: 0 };
    score = {
      ...score,
      [launchNumberRef.current.value]: parseInt(pinsNumberRef.current.value),
    };
    handleSave(frameNumberRef.current.value, score);
  };

  return (
    <MyModal
      isVisible={isVisible}
      handleSave={handleSaveScores}
      handleClose={handleClose}
      header={"Add or Update Score"}
    >
      <Form.Label htmlFor="inputFrame">Frame</Form.Label>
      <Form.Control
        type="text"
        id="inputFrame"
        aria-describedby="frameTextField"
        ref={frameNumberRef}
      />
      <Form.Text id="passwordHelpBlock" muted>
        {"Please don't enter anything"}
      </Form.Text>
      <br />
      <br />
      <Form.Select aria-label="Default select example" ref={launchNumberRef}>
        <option>Launch number</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </Form.Select>
      <br />
      <br />
      <Form.Label htmlFor="inputPinsNumber">Number of pins touched</Form.Label>
      <Form.Control
        type="text"
        id="inputPinsNumber"
        aria-describedby="pinsTextField"
        ref={pinsNumberRef}
      />
    </MyModal>
  );
};

AddScoreDialog.propTypes = {
  isVisible: PropTypes.bool,
  handleSave: PropTypes.func,
  handleClose: PropTypes.func,
  scores: PropTypes.object,
};

export default AddScoreDialog;
