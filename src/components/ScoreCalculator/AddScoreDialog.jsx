import PropTypes from "prop-types";
import MyModal from "../MyModal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const AddScoreDialog = (props) => {
  const { isVisible, handleSave, handleClose } = props;
	const [score, setScore] = useState({
		1: 0,
		2: 0,
		3: 0,
	});

	const handleSaveScores = () => {
		handleSave(score);
		setScore({});
	}

  return (
    <MyModal
      isVisible={isVisible}
      handleSave={handleSaveScores}
      handleClose={handleClose}
      header={"Add Score"}
    >
      <Form.Select aria-label="Default select example">
        <option>Launch number</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </Form.Select>
    </MyModal>
  );
};

AddScoreDialog.propTypes = {
  isVisible: PropTypes.bool,
  handleSave: PropTypes.func,
  handleClose: PropTypes.func,
};

export default AddScoreDialog;
