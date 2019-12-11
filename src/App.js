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

  const [teams, setTeams] = useState({
    1: { name: "Backend Team" },
    2: { name: "Frontend Team" },
    3: { name: "Engineering Team" }
  });

  const [teamToEdit, setTeamToEdit] = useState(null);

  const addNewMember = member => {
    const newMember = Object.entries(member)[0];
    setMembers({ ...members, [Date.now()]: { ...newMember[1] } });
  };

  const editMember = member => {
    const editedMember = Object.entries(member)[0];
    if (member.delete) {
      const newMembers = { ...members };
      delete newMembers[member[0]];
      setMembers({ ...newMembers });
      console.log({ member });
    } else {
      setMembers({ ...members, [editedMember[0]]: { ...editedMember[1] } });
      setMemberToEdit(null);
    }
  };

  const addNewTeam = team => {
    const newTeam = Object.entries(team)[0];
    setTeams({ ...teams, [Date.now()]: { ...newTeam[1] } });
  };

  const editTeam = team => {
    const editedTeam = Object.entries(team)[0];

    console.log(editedTeam[0], editedTeam[1].delete);

    if (editedTeam[1].delete === true) {
      const newTeams = { ...teams };
      delete newTeams[editedTeam[0]];
      setTeams({ ...newTeams });
    } else {
      setTeams({
        ...teams,
        [editedTeam[0]]: { ...editedTeam[1] }
      });
      setTeamToEdit(null);
    }
  };

  console.log({ teams });
  return (
    <Container>
      <Row className="mb-5">
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
            teams={teams}
            editMember={editMember}
            setMemberToEdit={setMemberToEdit}
          />
        )}
      />

      <Route
        exact
        path="/add-new-team"
        render={renderProps => (
          <Row>
            <Col>
              <TeamForm
                {...renderProps}
                addNewTeam={addNewTeam}
                editTeam={editTeam}
                teams={teams}
                setTeamToEdit={setTeamToEdit}
              />
            </Col>
          </Row>
        )}
      />

      <Route
        exact
        path="/edit-team"
        render={renderProps => (
          <Row>
            <Col>
              <TeamForm
                {...renderProps}
                editTeam={editTeam}
                teamToEdit={teamToEdit}
              />
            </Col>
          </Row>
        )}
      />
      <Row>
        <Col>
          <Route
            exact
            path="/add-new-member"
            render={renderProps => (
              <Form
                {...renderProps}
                addNewMember={addNewMember}
                teams={teams}
              />
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
              teams={teams}
            />
          )}
        />
      </Row>
    </Container>
  );
};

export default App;
