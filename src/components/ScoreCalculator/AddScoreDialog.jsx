import PropTypes from "prop-types";
import MyModal from "../MyModal";

const AddScoreDialog = (props) => {
  const { isVisible, handleSave, handleClose, children } = props;

  return (
    <MyModal isVisible={isVisible} handleSave={handleSave} handleClose={handleClose} header={"Add Score"}>
			{children}
		</MyModal>
  );
};

AddScoreDialog.propTypes = {
  isVisible: PropTypes.bool,
  handleSave: PropTypes.func,
  handleClose: PropTypes.func,
  children: PropTypes.node,
};

export default AddScoreDialog;
