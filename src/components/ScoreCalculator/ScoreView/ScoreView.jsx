import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import "./ScoreView.css";

const ScoreView = (props) => {
  const { scores, calculateScoreResult } = props;

  const headers = Object.keys(scores);
  return (
    <Table responsive bordered className="table-score">
      <thead>
        <tr>
          {headers.map((frame, index) => (
            <th key={`${frame} ${index + 1}`} colSpan={3}>
              <h4 className="table-header">{`Frame ${frame}`}</h4>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {headers.map((frame) =>
            Object.values(scores[frame]).map((launchValue, index) => (
              <td key={`${frame}-${index + 1}`}>{launchValue}</td>
            ))
          )}
        </tr>
      </tbody>
      {calculateScoreResult && (
        <tfoot>
          <tr>
            {calculateScoreResult.map((res) => (
              <td key={res} colSpan={3}>
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
