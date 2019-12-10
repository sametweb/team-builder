import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

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
      <header>
        <Link to="/">Home </Link>
        <Link to="/add-new-member">Add New Member</Link>
      </header>
      <Route
        exact
        path="/"
        render={renderProps => (
          <MemberList
            {...renderProps}
            members={members}
            setMemberToEdit={setMemberToEdit}
          />
        )}
      />
      <Route
        exact
        path="/add-new-member"
        render={renderProps => (
          <Form {...renderProps} addNewMember={addNewMember} />
        )}
      />
      <Route
        path="/edit-member"
        render={renderProps => (
          <Form
            {...renderProps}
            editMember={editMember}
            memberToEdit={memberToEdit}
          />
        )}
      />
    </>
  );
};

export default App;
