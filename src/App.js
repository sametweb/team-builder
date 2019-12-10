import React, { useState } from "react";

import MemberList from "./components/MemberList";
import Form from "./components/Form";

const App = () => {
  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  const addNewMember = member => {
    setMembers([...members, { ...member, id: Date.now() }]);
  };

  const editMember = member => {
    const editedMembers = members.map(editedMember =>
      editedMember.id !== memberToEdit.id ? editedMember : member
    );
    setMembers([...editedMembers]);
    setMemberToEdit(null);
  };

  console.log(members);

  return (
    <>
      <Form
        addNewMember={addNewMember}
        editMember={editMember}
        memberToEdit={memberToEdit}
      />
      {members.length > 0 ? (
        <MemberList members={members} setMemberToEdit={setMemberToEdit} />
      ) : (
        <p>No team members yet.</p>
      )}
    </>
  );
};

export default App;
