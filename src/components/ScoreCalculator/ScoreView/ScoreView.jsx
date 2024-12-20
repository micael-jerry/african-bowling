import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import {
  FRAME_MAX_VALUE,
  LAUNCH_NUMBER_IN_FRAME,
} from "../../../utils/scoreCalculatorConst";
import "./ScoreView.css";

const ScoreView = (props) => {
  const { scores, calculateScoreResult } = props;

  const headers = Object.keys(scores);
  return (
    <Table responsive bordered className="table-score">
      <thead>
        <tr>
          {headers.map((frame, index) => (
            <th key={`${frame} ${index + 1}`} colSpan={LAUNCH_NUMBER_IN_FRAME}>
              {frame <= FRAME_MAX_VALUE ? (
                <h4 className="table-header">{`Frame ${frame}`}</h4>
              ) : (
                "Additional launch"
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {headers.map((frame) =>
            Object.values(scores[frame]).map((launchValue, index) => (
              <td key={`${frame}-${index + 1}`}>{launchValue}</td>
            )),
          )}
        </tr>
      </tbody>
      {calculateScoreResult && (
        <tfoot>
          <tr>
            {calculateScoreResult.map((res) => (
              <td
                className="bg-light"
                key={res}
                colSpan={LAUNCH_NUMBER_IN_FRAME}
              >
                {res}
              </td>
            ))}
          </tr>
        </tfoot>
      )}
    </Table>
  );
};

ScoreView.propTypes = {
  scores: PropTypes.object,
  calculateScoreResult: PropTypes.array,
};

export default ScoreView;
