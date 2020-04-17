import React, { useState } from "react";
import { connect } from "react-redux";
import { formSubmit } from "../actions";
import axios from "axios";

const SmurfForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    height: "",
  });

  const [post, setPost] = useState([]);

  const handleSubmit = (e) => {
    // e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", formState)
      .then((res) => {
        setPost(res.data);

        setFormState({
          name: "",
          age: "",
          height: "",
        });
      })
      .catch((err) => console.log("FormSubmit", err.res));
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value,
    };

    setFormState(newFormData);
  };

  return (
    <div>
      <form className="smurf-form" onSubmit={handleSubmit()}>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            type="text"
            name="name"
            value={formState.name}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            id="age"
            type="text"
            name="age"
            value={formState.age}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="height">
          Height:
          <input
            id="height"
            type="text"
            name="height"
            value={formState.height}
            onChange={inputChange}
          />
        </label>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.smurfs.name,
    age: state.smurfs.age,
    height: state.smurfs.height,
  };
};

//connect component
export default connect(mapStateToProps, { formSubmit })(SmurfForm);
