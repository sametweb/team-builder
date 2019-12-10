import React from "react";
import Member from "./Member.js";
import { Row, Col, Alert } from "reactstrap";

const MemberList = ({ members, setMemberToEdit, history }) => {
  if (members.length > 0) {
    return (
      <>
        <Row>
          <Col>
            <h2>List of our team members</h2>
          </Col>
        </Row>
        <Row>
          {members.map(member => (
            <Col xs="12" key={member.id} className="mb-2">
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
  } else {
    return (
      <Row>
        <Col>
          <Alert color="secondary">No teams or team members added yet!</Alert>
        </Col>
      </Row>
    );
  }
};

export default MemberList;
