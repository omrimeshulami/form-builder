import React, { useEffect } from "react";
import { Button, TextInput } from "evergreen-ui";
import axios from "axios";
import { fetchForm, updateInfo } from "../actions/submitFormActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function SubmitForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchForm(
        props.location.pathname.slice(
          props.location.pathname.lastIndexOf("/") + 1
        )
      )
    ); // useEffect == get the info before the page render
  }, []);

  const submitInfo = useSelector((state) => state.submitFormInfo);
  console.log(submitInfo);
  return (
    <div>
      <ul>
        <li>{submitInfo.title}</li>
      </ul>
      <ul>
        {submitInfo.fields.map((item) => (
          <li key={item.fieldLabel}>
            {item.fieldLabel}:
            <TextInput
              id={item.fieldLabel}
              type={item.inputType}
              onChange={(e) =>
                dispatch(updateInfo(item.fieldLabel, e.target.value))
              }
            ></TextInput>
          </li>
        ))}
      </ul>
      <ul>
        <li className="p-3">
          <Button
            appearance="primary"
            onClick={() => {
              axios
                .post("/submitSubForForm", { submitInfo })
                .then((response) => {
                  console.log(response);
                  history.push("/");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            send to server{" "}
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default SubmitForm;
