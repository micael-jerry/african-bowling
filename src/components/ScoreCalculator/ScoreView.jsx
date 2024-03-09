import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

const ScoreView = (props) => {
  const { scores } = props;

  const headers = Object.keys(scores);
  return (
    <Table responsive bordered>
      <thead>
        <tr>
          {headers.map((frame, index) => (
            <th key={`${frame} ${index + 1}`} colSpan={3}>
              {`Frame ${frame}`}
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
    </Table>
  );
};

ScoreView.propTypes = {
  scores: PropTypes.object,
};

export default ScoreView;
