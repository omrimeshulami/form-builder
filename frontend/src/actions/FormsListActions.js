import axios from "axios";

//////////MANAGE FORMS LIST ACTIONS//////////////////////
export const delete_form = (key) => {
  return function (dispatch) {
    axios
      .post("/deleteFormById", { key: key })
      .then((response) => {
        console.log(response.data);
        dispatch(fetch_forms());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetch_forms = () => {
  return function (dispatch) {
    axios.get("/retrieveForms").then((res) => {
      dispatch(updateFromServer(res.data));
    });
  };
};

export const updateFromServer = (list) => {
  return {
    type: "UPDATE_BY_SERVER",
    list: list,
  };
};
