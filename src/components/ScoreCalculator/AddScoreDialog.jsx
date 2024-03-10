import PropTypes from "prop-types";
import MyModal from "../MyModal";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import {
  FRAME_MAX_VALUE,
  LAUNCH_NUMBER_IN_FRAME,
} from "../../utils/scoreCalculatorConst";

// TODO: ADD FORM VALIDATOR
// TODO: ADD VALIDATOR pins number input: [number | / | X]

const AddScoreDialog = (props) => {
  const { isVisible, handleSave, handleClose, scores } = props;

  const frameNumberRef = useRef(null);
  const launchNumberRef = useRef(null);
  const pinsNumberRef = useRef(null);
  const handleSaveScores = () => {
    let score = scores[frameNumberRef.current.value];
    if (!score) score = { 1: null, 2: null, 3: null };
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
      <Form.Select aria-label="Default select frame" ref={frameNumberRef}>
        <option value={null}>Frame number</option>
        {Array.from({ length: FRAME_MAX_VALUE }).map((_, index) => (
          <option key={`${index + 1}`} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </Form.Select>
      <br />
      <Form.Select aria-label="Default select launch" ref={launchNumberRef}>
        <option value={null}>Launch number</option>
        {Array.from({ length: LAUNCH_NUMBER_IN_FRAME }).map((_, index) => (
          <option key={`${index + 1}`} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </Form.Select>
      <br />
      <Form.Label htmlFor="inputPinsNumber">Number of pins touched</Form.Label>
      <Form.Control
        type="text"
        id="inputPinsNumber"
        aria-describedby="pinsTextField"
        ref={pinsNumberRef}
      />
      <Form.Text id="inputPinsInfo" muted>
        {"Please don't enter anything"}
      </Form.Text>
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
