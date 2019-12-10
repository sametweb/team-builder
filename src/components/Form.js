import React, { useState, useEffect } from "react";

const Form = ({ addNewMember, editMember, memberToEdit, history }) => {
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
    memberToEdit && setMember({ ...memberToEdit });
  }, [memberToEdit]);

  const currentMember = Object.values(member)[0];

  return (
    <form onSubmit={submitForm} method="POST">
      <h2>Add New Team Member</h2>
      <label htmlFor="name">
        Name:{" "}
        <input
          id="name"
          name="name"
          onChange={handleChange}
          value={currentMember.name}
          placeholder="enter name"
        />
      </label>
      <label htmlFor="email">
        Email:{" "}
        <input
          id="email"
          name="email"
          onChange={handleChange}
          value={currentMember.email}
          placeholder="enter email"
        />
      </label>
      <label htmlFor="role">
        Role:{" "}
        <input
          id="role"
          name="role"
          onChange={handleChange}
          value={currentMember.role}
          placeholder="enter role"
        />
      </label>
      <label htmlFor="submit">
        <button id="submit" type="submit">
          {!memberToEdit ? `Add Team Member` : `Save Changes`}
        </button>
      </label>
    </form>
  );
};

export default Form;
