import { useState } from "react";
import { Button } from "react-bootstrap";
import AddScoreDialog from "./AddScoreDialog";
import useScoreStore from "../../store/useScoreStore";
import ScoreView from "./ScoreView/ScoreView";

const ScoreCalculator = () => {
  const { scores, addOrUpdateScore } = useScoreStore();
  const [addScoreDialogVisible, setAddScoreDialogVisible] = useState(false);

  const handleShow = () => setAddScoreDialogVisible(true);
  const handleHide = () => setAddScoreDialogVisible(false);
  const handleAddScore = (frameNumber, score) => {
    addOrUpdateScore(frameNumber, score);
    setAddScoreDialogVisible(false);
  };

  const scoresTest = {
    1: { 1: 2, 2: 0, 3: 0 },
    2: { 1: 3, 2: 1, 3: 4 },
    3: { 1: 0, 2: 2, 3: 1 },
    4: { 1: 1, 2: 3, 3: 2 },
    5: { 1: 4, 2: 0, 3: 1 },
    6: { 1: 2, 2: 1, 3: 3 },
  };

  return (
    <div>
      {addScoreDialogVisible && (
        <AddScoreDialog
          isVisible={addScoreDialogVisible}
          handleSave={handleAddScore}
          handleClose={handleHide}
          scores={scores}
        />
      )}
      {Object.keys(scores).length != 0 ? (
        <div>
          <h2>Score View</h2>
          <br />
          <ScoreView scores={scores} />
          <Button onClick={() => handleShow()}>Add Scores</Button>
        </div>
      ) : (
        <div>
          <ScoreView scores={scoresTest} />
          <h1>The scoreboard is currently empty</h1>
          <Button onClick={() => handleShow()}>Add Scores</Button>
        </div>
      )}
    </div>
  );
};

export default ScoreCalculator;
