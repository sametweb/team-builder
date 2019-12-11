import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form as MyForm,
  FormGroup,
  Input,
  FormFeedback,
  Alert,
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
  const [invalidStatus, setInvalidStatus] = useState(false);
  useEffect(() => {
    teamToEdit && setTeam(teamToEdit);
  }, [teamToEdit]);

  const handleSubmit = event => {
    if (!invalidStatus) {
      if (!teamToEdit) {
        addNewTeam(team);
        setTeam(INITIAL_STATE);
      } else {
        editTeam(team);
        setTeam(INITIAL_STATE);
      }
      history.push("/add-new-team");
    }
    event.preventDefault();
  };

  const currentTeam = Object.values(team)[0];
  return (
    <Row className="mb-5">
      <Col xs="12" className="mb-5">
        <h3>
          {!teamToEdit
            ? "Add New Team"
            : `You are editing '${teamToEdit &&
                Object.entries(teamToEdit)[0][1].name}' team`}
        </h3>
        <MyForm onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              onTouchStart={e => console.log({ e })}
              onBlur={e => {
                e.target.value.length < 3
                  ? setInvalidStatus(true)
                  : setInvalidStatus(false);
              }}
              invalid={invalidStatus}
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
            {invalidStatus ? (
              <FormFeedback>
                A team name should have at least 3 characters
              </FormFeedback>
            ) : null}
          </FormGroup>

          <Button type="submit">
            {!teamToEdit ? "Add New Team" : "Save Changes"}
          </Button>
        </MyForm>
      </Col>
      <Col xs="12">
        {teams && Object.entries(teams).length > 0 ? (
          <h3>Team List</h3>
        ) : !editTeam ? (
          <Alert color="secondary">No teams added yet!</Alert>
        ) : null}

        {teams &&
          Object.entries(teams).map(team => (
            <Card key={team[0]} className="mb-2">
              <CardBody>
                <Button
                  className="float-right"
                  color="danger"
                  size="sm"
                  onClick={e => {
                    editTeam({
                      [team[0]]: { ...team[1], delete: true }
                    });
                    e.stopPropagation();
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
  );
};

export default TeamForm;
