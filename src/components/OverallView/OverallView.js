import "./OverallView.scss";

export default function OverallView({ result, performance }) {
  return (
    <div className="overall">
      <h1 className="overall__title">Your Result</h1>
      <div className="overall__result-count">
        <span className="overall__result-user">{result}</span>
        <span className="overall__result-max"> of 100</span>
      </div>
      <div>
        <h2 className="overall__subtitle">Great</h2>
        <p className="overall__body">Your performance exceeds {performance}% of the people conducting the test here!</p>
      </div>
    </div>
  );
}
