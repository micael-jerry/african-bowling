import { useState } from "react";
import { Button } from "react-bootstrap";

const ScoreCalculator = () => {
	const [scores, setScores] = useState(null);
	return (
    <div>
      {scores ? (
        <div>ScoreCalculator</div>
      ) : (
        <div>
          <h1>The scoreboard is currently empty</h1>
          <Button onClick={() => window.location.reload()}>Add Scores</Button>
        </div>
      )}
    </div>
  );
}

export default ScoreCalculator;
