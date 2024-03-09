import { useState } from "react";
import { Button } from "react-bootstrap";
import AddScoreDialog from "./AddScoreDialog";

const ScoreCalculator = () => {
  const [scores, setScores] = useState(null);
  const [addScoreDialogVisible, setScoreDialogVisible] = useState(false);

  const handleShow = () => setScoreDialogVisible(true);
  const handleHide = () => setScoreDialogVisible(false);
  const handleSave = () => {
    setScoreDialogVisible(false);
  };

  return (
    <div>
      {addScoreDialogVisible && (
        <AddScoreDialog
          isVisible={addScoreDialogVisible}
          handleSave={handleSave}
          handleClose={handleHide}
        >
          <div>Add Score form</div>
        </AddScoreDialog>
      )}
      {scores ? (
        <div>
          <div>ScoreCalculator</div>
          <Button onClick={() => handleShow()}>Add Scores</Button>
        </div>
      ) : (
        <div>
          <h1>The scoreboard is currently empty</h1>
          <Button onClick={() => handleShow()}>Add Scores</Button>
        </div>
      )}
    </div>
  );
};

export default ScoreCalculator;
