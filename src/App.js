import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Header from "./components/Header";
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
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
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
      <Row>
        <Col>
          <Route
            exact
            path="/add-new-member"
            render={renderProps => (
              <Form {...renderProps} addNewMember={addNewMember} />
            )}
          />
        </Col>
      </Row>
      <Row>
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
      </Row>
    </Container>
  );
};

export default App;
