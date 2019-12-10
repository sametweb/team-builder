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
            setMemberToEdit({ [member[0]]: member[1] });
            history.push("/edit-member");
          }}
          style={{ marginRight: 5 }}
        >
          Edit
        </Button>

        <CardTitle>
          <strong>{member[1].name}</strong>
        </CardTitle>
        <CardText>
          {member[1].role}, {member[1].email}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Member;
