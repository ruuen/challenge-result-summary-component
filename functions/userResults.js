const data = {
  "result": 76,
  "performancePercent": 65,
  "details": [
    {
      "id": 1,
      "category": "Reaction",
      "score": 80,
      "icon": "/icons/icon-reaction.svg",
      "alt": "Lightning",
    },
    {
      "id": 2,
      "category": "Memory",
      "score": 92,
      "icon": "/icons/icon-memory.svg",
      "alt": "Brain",
    },
    {
      "id": 3,
      "category": "Verbal",
      "score": 61,
      "icon": "/icons/icon-verbal.svg",
      "alt": "Speechbubble",
    },
    {
      "id": 4,
      "category": "Visual",
      "score": 72,
      "icon": "/icons/icon-visual.svg",
      "alt": "Eyeball",
    },
  ],
};

exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
