import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
const Member = ({ member, setMemberToEdit, history }) => {
  return (
    <Card>
      <CardBody>
        <Button className="float-right" color="danger" size="sm">
          Delete
        </Button>
        <Button
          className="float-right"
          color="info"
          size="sm"
          onClick={() => {
            setMemberToEdit(member);
            history.push("/edit-member");
          }}
          style={{ marginRight: 5 }}
        >
          Edit
        </Button>

        <CardTitle>
          <strong>{member.name}</strong>
        </CardTitle>
        <CardText>
          {member.role} | {member.email}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Member;
