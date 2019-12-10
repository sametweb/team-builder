import React from "react";
import Member from "./Member.js";

const MemberList = ({ members, setMemberToEdit }) => {
  return (
    <div>
      <h1>List of our team members</h1>
      {members.map(member => (
        <Member
          key={member.id}
          member={member}
          setMemberToEdit={setMemberToEdit}
        />
      ))}
    </div>
  );
};

export default MemberList;
