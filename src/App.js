import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Header from "./components/Header";
import MemberList from "./components/MemberList";
import Form from "./components/Form";
import TeamForm from "./components/TeamForm";

const App = () => {
  const [members, setMembers] = useState({
    "1": {
      teamId: 1,
      name: "Samet Mutevelli",
      email: "sametmutevellioglu@gmail.com",
      role: "Full-Stack Web Developer"
    }
  });

  const [memberToEdit, setMemberToEdit] = useState(null);

  const [teams, setTeams] = useState([
    { id: 1, name: "Best Team Ever" },
    { id: 2, name: "Worst Team Ever" }
  ]);

  const addNewMember = member => {
    setMembers({ ...members, [Date.now()]: { ...member[0] } });
  };

  const editMember = member => {
    const editedMember = Object.entries(member)[0];
    console.log({ editedMember });
    setMembers({ ...members, [editedMember[0]]: { ...editedMember[1] } });
    // setMemberToEdit(null);
  };

  const addNewTeam = team => {
    setTeams([...teams, { ...team, id: Date.now() }]);
  };

  // const editTeam = team => {};

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
            path="/add-new-team"
            render={renderProps => (
              <TeamForm {...renderProps} addNewTeam={addNewTeam} />
            )}
          />
        </Col>
      </Row>
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
