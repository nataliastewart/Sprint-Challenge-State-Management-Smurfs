import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfList = (props) => {
  return (
    <div>
      <p>Click on the Smurf to get his friends! </p>
      <img
        className="smurf-img"
        src="https://png2.cleanpng.com/sh/c747b4215c2962c977669116516394ac/L0KzQYi4UcI4N2FmSJGAYUHldYXsUPFma2U9TJC5MUO7R4KBWME2OWI8T6kAMES6QYaCTwBvbz==/5a1be4e0aec484.0138718815117775047159.png"
        alt="cute smurf"
        onClick={() => props.getSmurfs()}
      />
      <p>Add a new Smurf below</p>
      {props.smurfs.map((smurf) => (
        <div key={smurf.id}>
          <h2>Name: {smurf.name}</h2>
          <p>Age:{smurf.age}</p>
          <p>Height: {smurf.height}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
  };
};

//connect component
export default connect(mapStateToProps, { getSmurfs })(SmurfList);
