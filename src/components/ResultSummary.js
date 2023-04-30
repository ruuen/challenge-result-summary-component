import { useEffect, useState } from "react";
import DetailView from "./DetailView/DetailView";
import OverallView from "./OverallView/OverallView";

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

  // This is jank but Netlify redirects are weird with the local dev CLI
  // Point at prod while styling :) :) :)
  useEffect(() => {
    fetch("https://rd-challenge-result-summary.netlify.app/api/userResults")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="result-summary__wrapper">
      <OverallView result={userData.result} performance={userData.performancePercent} />
      <DetailView detailData={userData.details} />
    </div>
  );
}
