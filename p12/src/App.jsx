import React, { useState } from "react";
import MemberCard from "./components/Card";
import "./index.css";

function App() {
  const initialMembers = [
    { id: 1, name: "ram ", feedback: 0 },
    { id: 2, name: "shyam ", feedback: 0 },
    { id: 3, name: "ghanshyam", feedback: 0 },
    { id: 4, name: "Amol", feedback: 0 },
  ];

  const [members, setMembers] = useState(initialMembers);

  const increaseFeedback = (id) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, feedback: m.feedback + 1 } : m))
    );
  };

  const resetAll = () => {
    setMembers((prev) => prev.map((m) => ({ ...m, feedback: 0 })));
  };

  return (
    <div className="app-container">
      <h1>Team Feedback Tracker </h1>
      <div className="member-list">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            feedback={member.feedback}
            onIncrease={() => increaseFeedback(member.id)}
          />
        ))}
      </div>
      <button onClick={resetAll} className="reset-btn">
        Reset All
      </button>
    </div>
  );
}

export default App;
