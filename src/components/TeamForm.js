import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form as MyForm,
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const TeamForm = ({
  addNewTeam,
  editTeam,
  teams,
  teamToEdit,
  setTeamToEdit,
  history
}) => {
  const INITIAL_STATE = { 0: { name: "" } };
  const [team, setTeam] = useState(INITIAL_STATE);

  useEffect(() => {
    teamToEdit && setTeam(teamToEdit);
  }, [teamToEdit]);

  const handleSubmit = event => {
    if (!teamToEdit) {
      addNewTeam(team);
      setTeam(INITIAL_STATE);
    } else {
      editTeam(team);
      setTeam(INITIAL_STATE);
    }
    history.push("/add-new-team");
    event.preventDefault();
  };

  const currentTeam = Object.values(team)[0];
  console.log({ currentTeam });
  return (
    <>
      <Row className="mb-5">
        <Col>
          <h3>
            {!teamToEdit
              ? "Add New Team"
              : `You are editing '${teamToEdit &&
                  Object.entries(teamToEdit)[0][1].name}' team`}
          </h3>
          <MyForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                autoFocus
                id="name"
                name="name"
                placeholder="enter a team name"
                onChange={e =>
                  setTeam({
                    [Object.keys(team)[0]]: {
                      ...Object.values(team)[0],
                      [e.target.name]: e.target.value
                    }
                  })
                }
                value={currentTeam.name}
              />
            </FormGroup>

            <Button type="submit">
              {!teamToEdit ? "Add New Team" : "Save Changes"}
            </Button>
          </MyForm>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          {Object.entries(teams).length > 0 ? (
            <h3>Team List</h3>
          ) : (
            <h5>No team found</h5>
          )}

          {teams &&
            Object.entries(teams).map(team => (
              <Card key={team[0]} className="mb-2">
                <CardBody>
                  <Button
                    className="float-right"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      editTeam({
                        [team[0]]: { ...team[1], delete: true }
                      });
                      setTeam(INITIAL_STATE);
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    className="float-right"
                    color="info"
                    size="sm"
                    onClick={() => {
                      setTeamToEdit({ [team[0]]: { ...team[1] } });
                      history.push("/edit-team");
                    }}
                    style={{ marginRight: 5 }}
                  >
                    Edit
                  </Button>
                  <CardTitle>{team[1].name}</CardTitle>
                </CardBody>
              </Card>
            ))}
        </Col>
      </Row>
    </>
  );
};

export default TeamForm;
