import PropTypes from "prop-types";
import MyModal from "../MyModal";
import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";
import {
  FRAME_MAX_VALUE,
  LAUNCH_NUMBER_IN_FRAME,
} from "../../utils/scoreCalculatorConst";
import { getErrorAddScore } from "../../utils/scoreCalculatorUtils";

const AddScoreDialog = (props) => {
  const { isVisible, handleSave, handleClose, scores } = props;

  const frameNumberRef = useRef(null);
  const launchNumberRef = useRef(null);
  const pinsNumberRef = useRef(null);
  const [validation, setValidation] = useState(null);
  const handleSaveScores = () => {
    const error = getErrorAddScore(
      frameNumberRef.current.value,
      launchNumberRef.current.value,
      pinsNumberRef.current.value,
    );
    if (error != null) {
      setValidation(error);
      return;
    }
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
        <option value={0}>Frame number</option>
        {Array.from({ length: FRAME_MAX_VALUE }).map((_, index) => (
          <option key={`${index + 1}`} value={index + 1}>
            {index + 1}
          </option>
        ))}
        <option value={6}>Additional launch</option>
      </Form.Select>
      <br />
      <Form.Select aria-label="Default select launch" ref={launchNumberRef}>
        <option value={0}>Launch number</option>
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
      <br />
      <Form.Text id="validationMessage" muted>
        <h6 className="text-danger">{validation}</h6>
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
