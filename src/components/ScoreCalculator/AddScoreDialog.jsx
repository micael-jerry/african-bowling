import PropTypes from "prop-types";
import MyModal from "../MyModal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import {
  FRAME_MAX_VALUE,
  LAUNCH_NUMBER_IN_FRAME,
} from "../../utils/scoreCalculatorConst";

// TODO: ADD FORM VALIDATOR
// TODO: ADD VALIDATOR pins number input: [number | / | X]

const AddScoreDialog = (props) => {
  const { isVisible, handleSave, handleClose, scores } = props;

  const [frameNumber, setFrameNumber] = useState(0);
  const [launchNumber, setLaunchNumber] = useState(0);
  const [pinsNumber, setPinsNumber] = useState("");
  const handleSaveScores = () => {
    let score = scores[frameNumber];
    if (!score) score = { 1: null, 2: null, 3: null };
    score = {
      ...score,
      [launchNumber]: parseInt(pinsNumber),
    };
    handleSave(frameNumber, score);
  };

  return (
    <MyModal
      isVisible={isVisible}
      handleSave={handleSaveScores}
      handleClose={handleClose}
      header={"Add or Update Score"}
    >
      <Form.Select
        aria-label="Default select frame"
        value={frameNumber}
        onChange={(event) => setFrameNumber(event.target.value)}
      >
        <option value={0}>Frame number</option>
        {Array.from({ length: FRAME_MAX_VALUE }).map((_, index) => (
          <option key={`${index + 1}`} value={index + 1}>
            {index + 1}
          </option>
        ))}
        <option value={6}>Additional launch</option>
      </Form.Select>
      <br />
      <Form.Select
        aria-label="Default select launch"
        value={launchNumber}
        onChange={(event) => setLaunchNumber(event.target.value)}
      >
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
        value={pinsNumber}
        onChange={(event) => setPinsNumber(event.target.value)}
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
