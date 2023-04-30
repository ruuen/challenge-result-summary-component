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
        "alt": "Lightning",
      },
      {
        "id": 2,
        "category": "Memory",
        "score": 0,
        "icon": "",
        "alt": "Brain",
      },
      {
        "id": 3,
        "category": "Verbal",
        "score": 0,
        "icon": "",
        "alt": "Speechbubble",
      },
      {
        "id": 4,
        "category": "Visual",
        "score": 0,
        "icon": "",
        "alt": "Eyeball",
      },
    ],
  });

  useEffect(() => {
    fetch("/api/userResults")
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
