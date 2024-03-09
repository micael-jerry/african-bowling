import { useState } from "react";
import { Button } from "react-bootstrap";
import AddScoreDialog from "./AddScoreDialog";

const ScoreCalculator = () => {
  const [scores, setScores] = useState({});
  const [addScoreDialogVisible, setScoreDialogVisible] = useState(false);

  const handleShow = () => setScoreDialogVisible(true);
  const handleHide = () => setScoreDialogVisible(false);
  const handleSaveScores = (score) => {
    setScores({...scores, score});
    setScoreDialogVisible(false);
  };

  return (
    <div>
      {addScoreDialogVisible && (
        <AddScoreDialog
          isVisible={addScoreDialogVisible}
          handleSave={handleSaveScores}
          handleClose={handleHide}
        />
      )}
      {scores.length != 0 ? (
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
