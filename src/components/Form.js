import React, { useState, useEffect } from "react";
import {
  Form as MyForm,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Button
} from "reactstrap";

const Form = ({ addNewMember, editMember, memberToEdit, teams, history }) => {
  const INITIAL_STATE = {
    0: {
      teamId: "",
      name: "",
      email: "",
      role: ""
    }
  };
  const [member, setMember] = useState(INITIAL_STATE);
  const [invalidStatus, setInvalidStatus] = useState({
    teamId: false,
    name: false,
    email: false,
    role: false
  });
  const { teamId, name, email, role } = invalidStatus;
  const handleChange = event => {
    setMember({
      ...member,
      [Object.keys(member)[0]]: {
        ...Object.values(member)[0],
        [event.target.name]: event.target.value
      }
    });
  };

  const submitForm = event => {
    if (!teamId && !name && !email && !role) {
      !memberToEdit ? addNewMember({ ...member }) : editMember({ ...member });
      setMember(INITIAL_STATE);
      history.push("/");
    }
    event.preventDefault();
  };

  useEffect(() => {
    if (!memberToEdit && !addNewMember) {
      return history.push("/");
    }
    memberToEdit && setMember({ ...memberToEdit });
  }, [memberToEdit]);

  const currentMember = Object.values(member)[0];

  return (
    <MyForm onSubmit={submitForm} method="POST">
      <h2>Add New Team Member</h2>
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          invalid={invalidStatus.name}
          onBlur={e => {
            e.target.value.length < 3
              ? setInvalidStatus({ ...invalidStatus, name: true })
              : setInvalidStatus({ ...invalidStatus, name: false });
          }}
          autoFocus
          id="name"
          name="name"
          onChange={handleChange}
          value={currentMember.name}
          placeholder="enter name"
        />
        {invalidStatus.name ? (
          <FormFeedback>
            A team member name should have at least 3 characters
          </FormFeedback>
        ) : null}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          invalid={invalidStatus.email}
          onBlur={e => {
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
              e.target.value
            )
              ? setInvalidStatus({ ...invalidStatus, email: true })
              : setInvalidStatus({ ...invalidStatus, email: false });
          }}
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={currentMember.email}
          placeholder="enter email"
        />
        {invalidStatus.email ? (
          <FormFeedback>Please provide a valid email address</FormFeedback>
        ) : null}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="role">Role</Label>
        <Input
          invalid={invalidStatus.role}
          onBlur={e => {
            e.target.value.length < 12
              ? setInvalidStatus({ ...invalidStatus, role: true })
              : setInvalidStatus({ ...invalidStatus, role: false });
          }}
          id="role"
          name="role"
          onChange={handleChange}
          value={currentMember.role}
          placeholder="enter role"
        />
        {invalidStatus.role ? (
          <FormFeedback>
            A role description should have at least 12 characters
          </FormFeedback>
        ) : null}
      </FormGroup>
      <FormGroup>
        <Label for="teamId">Team</Label>
        <Input
          invalid={invalidStatus.teamId}
          onBlur={e => {
            Number(e.target.value) === 0
              ? setInvalidStatus({ ...invalidStatus, teamId: true })
              : setInvalidStatus({ ...invalidStatus, teamId: false });
          }}
          type="select"
          name="teamId"
          id="teamId"
          value={currentMember.teamId}
          onChange={handleChange}
        >
          <option value="0">Select a team</option>
          {Object.entries(teams).map(team => (
            <option key={team[0]} value={team[0]}>
              {team[1].name}
            </option>
          ))}
        </Input>
        {invalidStatus.teamId ? (
          <FormFeedback>
            Please select a team. If there is no team available, please add one
            before adding a member.
          </FormFeedback>
        ) : null}
      </FormGroup>
      <Label htmlFor="submit">
        <Button id="submit" type="submit">
          {!memberToEdit ? `Add Team Member` : `Save Changes`}
        </Button>
      </Label>
    </MyForm>
  );
};

export default Form;
