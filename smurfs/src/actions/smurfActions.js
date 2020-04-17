import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";
export const SUBMITTED_FORM = "SUBMITTED_FORM";
export const ERROR_SUBMIT = "ERROR_SUBMIT";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: "FETCH_SMURFS_START" });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("RES", res);
      dispatch({ type: "FETCH_SMURFS_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "FETCH_SMURFS_FAIL", payload: err.res });
    });
};

const formSubmit = (e) => (dispatch) => {
  e.preventDefault();
  //  dispatch({ type: "SUBMIT_FORM" });
  axios
    .post("http://localhost:3333/smurfs")
    .then((res) => {
      //  console.log("RES-POST", res);
      dispatch({ type: "SUBMITTED_FORM", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "ERROR_SUBMIT", payload: err.res });
    });
};
// axios
//   .post("", formState)
//   .then((res) => {
//     setPost(res.data);

//     setFormState({
//       name: "",
//       size: "",
//       // cheese: "",
//       // tomato: "",
//       // pepperoni: "",
//       // olives: "",
//       instructions: "",
//     });
//   })
//   .catch((err) => console.log("You form was not submitted", err.response));
