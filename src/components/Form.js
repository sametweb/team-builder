import React, { useState, useEffect } from "react";

const Form = ({ addNewMember, editMember, memberToEdit }) => {
  const INITIAL_STATE = {
    id: 0,
    name: "",
    email: "",
    role: ""
  };
  const [member, setMember] = useState(INITIAL_STATE);

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    !memberToEdit ? addNewMember({ ...member }) : editMember({ ...member });
    setMember(INITIAL_STATE);
    event.preventDefault();
  };

  useEffect(() => {
    memberToEdit && setMember(memberToEdit);
  }, [memberToEdit]);

  return (
    <form onSubmit={submitForm} method="POST">
      <h2>Add New Team Member</h2>
      <label htmlFor="name">
        Name:{" "}
        <input
          id="name"
          name="name"
          onChange={handleChange}
          value={member.name}
          placeholder="enter name"
        />
      </label>
      <label htmlFor="email">
        Email:{" "}
        <input
          id="email"
          name="email"
          onChange={handleChange}
          value={member.email}
          placeholder="enter email"
        />
      </label>
      <label htmlFor="role">
        Role:{" "}
        <input
          id="role"
          name="role"
          onChange={handleChange}
          value={member.role}
          placeholder="enter role"
        />
      </label>
      <label htmlFor="submit">
        <button id="submit" type="submit">
          {!memberToEdit ? `Add Team Member` : `Edit ${memberToEdit.name}`}
        </button>
      </label>
    </form>
  );
};

export default Form;
