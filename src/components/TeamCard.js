import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

const TeamCard = ({ teams, editTeam, setTeamToEdit, history }) => {
  return Object.entries(teams).map(team => (
    <Card key={team[0]} className="mb-2">
      <CardBody>
        <Button
          onMouseDown={e => e.preventDefault()}
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
          onMouseDown={e => e.preventDefault()}
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
  ));
};

export default TeamCard;
