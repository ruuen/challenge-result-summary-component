import { useEffect, useState } from "react";
import pageData from "../data/data";
import DetailView from "./DetailView/DetailView";
import OverallView from "./OverallView/OverallView";
import "./ResultSummary.scss";

export default function ResultSummary() {
  const [userData, setUserData] = useState({
    "result": 0,
    "performancePercent": 0,
    "details": [
      {
        "id": 1,
        "category": "Reaction",
        "score": 0,
        "icon": "",
      },
      {
        "id": 2,
        "category": "Memory",
        "score": 0,
        "icon": "",
      },
      {
        "id": 3,
        "category": "Verbal",
        "score": 0,
        "icon": "",
      },
      {
        "id": 4,
        "category": "Visual",
        "score": 0,
        "icon": "",
      },
    ],
  });

  useEffect(() => {
    setUserData(pageData);
  }, []);

  return (
    <div className="result-summary__wrapper">
      <OverallView result={userData.result} performance={userData.performancePercent} />
      <DetailView detailData={userData.details} />
    </div>
  );
}
