import React from 'react';

const FeedbackList = ({ feedback }) => {
  return (
    <div className="space-y-2">
      {feedback.map((item) => (
        <div key={item.id} className="p-3 bg-white bg-opacity-60 rounded-lg shadow">
          <div className="font-bold text-green-800">{item.user}</div>
          <div className="text-green-700">{item.message}</div>
          <div className="text-sm text-green-600">{item.date}</div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;