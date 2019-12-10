import React from "react";
import Member from "./Member.js";

const MemberList = ({ members, setMemberToEdit, history }) => {
  if (members.length > 0) {
    return (
      <div>
        <h1>List of our team members</h1>
        {members.map(member => (
          <Member
            history={history}
            key={member.id}
            member={member}
            setMemberToEdit={setMemberToEdit}
          />
        ))}
      </div>
    );
  } else {
    return <p>No team members yet.</p>;
  }
};

export default MemberList;
