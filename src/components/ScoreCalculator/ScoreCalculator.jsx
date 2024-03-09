import { useState } from "react";
import { Button } from "react-bootstrap";
import AddScoreDialog from "./AddScoreDialog";
import useScoreStore from "../../store/useScoreStore";
import ScoreView from "./ScoreView";

const ScoreCalculator = () => {
  const { scores, addOrUpdateScore } = useScoreStore();
  const [addScoreDialogVisible, setAddScoreDialogVisible] = useState(false);

  const handleShow = () => setAddScoreDialogVisible(true);
  const handleHide = () => setAddScoreDialogVisible(false);
  const handleAddScore = (frameNumber, score) => {
    addOrUpdateScore(frameNumber, score);
    setAddScoreDialogVisible(false);
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
          <ScoreView scores={scores}/>
          <Button onClick={() => handleShow()}>Add Scores</Button>
        </div>
      ) : (
        <div>
          <ScoreView scores={scores}/>
          <h1>The scoreboard is currently empty</h1>
          <Button onClick={() => handleShow()}>Add Scores</Button>
        </div>
      )}
    </div>
  );
};

export default ScoreCalculator;
