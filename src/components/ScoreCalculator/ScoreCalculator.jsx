import { useState } from "react";
import { Button } from "react-bootstrap";
import AddScoreDialog from "./AddScoreDialog";
import useScoreStore from "../../store/useScoreStore";

const ScoreCalculator = () => {
  const { scores, addScore } = useScoreStore();
  const [addScoreDialogVisible, setScoreDialogVisible] = useState(false);

  const handleShow = () => setScoreDialogVisible(true);
  const handleHide = () => setScoreDialogVisible(false);
  const handleAddScore = (score) => {
    addScore(score);
    setScoreDialogVisible(false);
  };

  return (
    <div>
      {addScoreDialogVisible && (
        <AddScoreDialog
          isVisible={addScoreDialogVisible}
          handleSave={handleAddScore}
          handleClose={handleHide}
        />
      )}
      {Object.keys(scores).length != 0 ? (
        <div>
          <h2>ScoreCalculator</h2>
          <br />
          <div>{JSON.stringify(scores)}</div>
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
