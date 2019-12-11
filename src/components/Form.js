import React, { useState, useEffect } from "react";
import { Form as MyForm, FormGroup, Label, Input, Button } from "reactstrap";

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
    !memberToEdit ? addNewMember({ ...member }) : editMember({ ...member });
    setMember(INITIAL_STATE);
    event.preventDefault();
    history.push("/");
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
          autoFocus
          id="name"
          name="name"
          onChange={handleChange}
          value={currentMember.name}
          placeholder="enter name"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          onChange={handleChange}
          value={currentMember.email}
          placeholder="enter email"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="role">Role</Label>
        <Input
          id="role"
          name="role"
          onChange={handleChange}
          value={currentMember.role}
          placeholder="enter role"
        />
      </FormGroup>
      <FormGroup>
        <Label for="teamId">Team</Label>
        <Input
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
