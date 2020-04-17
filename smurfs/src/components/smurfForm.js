import React from "react";
import { connect } from "react-redux";

import { formSubmit } from "../actions";

export default function smurfForm() {
  return <div></div>;
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
  };
};

//connect component
export default connect(mapStateToProps, { formSubmit })(smurfForm);
