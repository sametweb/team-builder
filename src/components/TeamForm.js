import React, { useState } from "react";

const TeamForm = ({ addNewTeam }) => {
  const INITIAL_STATE = { id: 0, name: "" };
  const [team, setTeam] = useState(INITIAL_STATE);

  const handleSubmit = event => {
    addNewTeam(team);
    setTeam(INITIAL_STATE);
    event.preventDefault();
  };

  console.log(team);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          name="name"
          placeholder="enter a team name"
          onChange={e => setTeam({ ...team, [e.target.name]: e.target.value })}
          value={team.name}
        />
      </label>
      <button type="submit">Add Team</button>
    </form>
  );
};

export default TeamForm;
