import { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import AddScoreDialog from "./AddScoreDialog";
import useScoreStore from "../../store/useScoreStore";
import ScoreView from "./ScoreView/ScoreView";
import { SCORES_TEST, scoresCalculation } from "../../utils/scoreCalculatorUtils";

const ScoreCalculator = () => {
  const { scores, addOrUpdateScore, setScores } = useScoreStore();
  const [calculateScoreResult, setCalculateScoreResult] = useState(null);
  const [addScoreDialogVisible, setAddScoreDialogVisible] = useState(false);

  const handleShow = () => setAddScoreDialogVisible(true);
  const handleHide = () => setAddScoreDialogVisible(false);
  const handleAddScore = (frameNumber, score) => {
    addOrUpdateScore(frameNumber, score);
    setAddScoreDialogVisible(false);
  };

  useEffect(() => {
    setScores(SCORES_TEST);
  }, []);

  const handleCalculateScore = () => {
    setCalculateScoreResult(scoresCalculation(scores));
  }

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
          <ScoreView
            scores={scores}
            calculateScoreResult={calculateScoreResult}
          />
          <Row>
            <Col>
              <Button onClick={() => handleShow()}>Add Scores</Button>
            </Col>
            <Col>
              <Button onClick={() => handleCalculateScore()}>Calculate</Button>
            </Col>
          </Row>
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
