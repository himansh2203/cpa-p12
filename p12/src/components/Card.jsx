import React from "react";

function MemberCard({ name, feedback, onIncrease }) {
  return (
    <div className="member-card">
      <h3>{name}</h3>
      <p>
        Feedback Count: <strong>{feedback}</strong>
      </p>
      <button onClick={onIncrease} className="increase-btn">
        Give Feedback
      </button>
    </div>
  );
}

export default MemberCard;
