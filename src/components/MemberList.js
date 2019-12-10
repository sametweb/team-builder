import React from "react";
import Member from "./Member.js";
import { Row, Col, Alert } from "reactstrap";

const MemberList = ({ members, setMemberToEdit, history }) => {
  if (Object.keys(members).length > 0) {
    return (
      <>
        <Row>
          <Col>
            <h2>List of our team members</h2>
          </Col>
        </Row>
        <Row>
          {Object.entries(members).map(member => (
            <Col xs="12" key={member[0]} className="mb-2">
              <Member
                history={history}
                member={member}
                setMemberToEdit={setMemberToEdit}
              />
            </Col>
          ))}
        </Row>
      </>
    );
  }
  return (
    <Row>
      <Col>
        <Alert color="secondary">No teams or team members added yet!</Alert>
      </Col>
    </Row>
  );
};

export default MemberList;
