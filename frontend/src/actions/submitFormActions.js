///////ACTION FOR SUBMITTING FORM/////////////
import axios from "axios";

export const initForm = (id, title, fields) => {
  return {
    type: "INIT_FORM",
    id,
    fields,
    title,
  };
};
export const fetchForm = (id) => {
  return function (dispatch) {
    axios
      .get(`/retrieveFormById/${id}`) //for the id
      .then((response) => {
        console.log(response.data);
        dispatch(
          initForm(response.data._id, response.data.title, response.data.fields)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const updateInfo = (fieldLabel, value) => {
  return {
    type: "UPDATE_INFO",
    fieldLabel,
    value,
  };
};
