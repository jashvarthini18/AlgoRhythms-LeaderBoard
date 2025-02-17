import React, { useEffect, useState } from "react";
import { getLeaderboard } from "./firebase";
import './App.css';  // Import CSS file

function App() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const data = await getLeaderboard();
      setLeaderboard(data);
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="App">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Score</th>
            <th>Total Time (Seconds)</th>
            <th>Total Questions</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.score}</td>
              <td>{user.totalTime}</td>
              <td>{user.totalQuestions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
