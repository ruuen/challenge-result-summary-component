const data = {
  "result": 76,
  "performancePercent": 65,
  "details": [
    {
      "id": 1,
      "category": "Reaction",
      "score": 80,
      "icon": iconReaction,
    },
    {
      "id": 2,
      "category": "Memory",
      "score": 92,
      "icon": iconMemory,
    },
    {
      "id": 3,
      "category": "Verbal",
      "score": 61,
      "icon": iconVerbal,
    },
    {
      "id": 4,
      "category": "Visual",
      "score": 72,
      "icon": iconVisual,
    },
  ],
};

exports.handler = function () {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
