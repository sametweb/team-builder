import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const Member = ({ member, teams, editMember, setMemberToEdit, history }) => {
  return (
    <Card>
      <CardBody>
        <Button
          className="float-right"
          color="danger"
          size="sm"
          onClick={() => {
            editMember({ ...member, delete: true });
          }}
        >
          Delete
        </Button>
        <Button
          className="float-right"
          color="info"
          size="sm"
          onClick={() => {
            setMemberToEdit({ [member[0]]: member[1] });
            history.push("/edit-member");
          }}
          style={{ marginRight: 5 }}
        >
          Edit
        </Button>

        <CardTitle>
          <strong>{member[1].name}</strong>
          <br />
          <small>
            <em>{member[1].role}</em>
          </small>
        </CardTitle>
        <CardText>{member[1].email}</CardText>
        <CardText className="text-muted">
          <em>
            Team:{" "}
            {teams[member[1].teamId] ? teams[member[1].teamId].name : "No Team"}
          </em>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Member;
