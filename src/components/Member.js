import React from "react";

const Member = ({ member, setMemberToEdit }) => {
  return (
    <div>
      <h2>{member.name}</h2>
      <p>
        <strong>Email:</strong> {member.email}
      </p>
      <p>
        <strong>Role:</strong> {member.role}
      </p>
      <button onClick={() => setMemberToEdit(member)}>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Member;
