import React from "react";
import { Combobox, TextInput, Button, Pane } from "evergreen-ui";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  updateNewField,
  addField,
  addTitle,
  findField,
  deleteField,
  updateField,
  clearNewForm,
} from "../actions/FormBuilderActions";
import { useHistory } from "react-router-dom";

function FormBuilderPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  let newForm = useSelector((state) => state.newForm);
  return (
    <Pane className="flex">
      <Pane className="w-1/2">
        <ul>
          <li className="p-3">
            title:
            <TextInput
              name="title"
              value={newForm.title}
              onChange={(e) => dispatch(addTitle(e.target.value))}
            />
          </li>
          <li className="p-3">
            field name:
            <TextInput
              name="fieldLabel"
              value={newForm.fieldInProcess.fieldLabel}
              onChange={(e) =>
                dispatch(updateNewField("fieldLabel", e.target.value))
              }
            />
          </li>
          <li className="p-3">
            input name:
            <TextInput
              name="inputName"
              value={newForm.fieldInProcess.inputName}
              onChange={(e) =>
                dispatch(updateNewField("inputName", e.target.value))
              }
            />
          </li>
          <li className="p-3 flex">
            input type:
            <Combobox
              items={["text", "email", "number", "password", "tel", "date"]}
              onChange={(selected) =>
                dispatch(updateNewField("inputType", selected))
              }
              selectedItem={newForm.fieldInProcess.inputType}
              autocompleteProps={{
                // Used for the title in the autocomplete.
                title: "InputType",
              }}
            />
          </li>
          <li className="p-3">
            <Button
              appearance="primary"
              onClick={() => {
                dispatch(addField());
              }}
            >
              add this row
            </Button>
          </li>
          <li className="p-3 flex">
            field to update:
            <Combobox
              items={newForm.fields.map((item) => item.fieldLabel)}
              onChange={(selected) => dispatch(findField(selected))}
              selectedItem={newForm.keyToUpdate}
              autocompleteProps={{
                // Used for the title in the autocomplete.
                title: "Fields",
              }}
            />
          </li>
          <li className="p-3">
            <Button
              appearance="primary"
              onClick={() => {
                dispatch(deleteField(newForm.fieldInProcess.fieldLabel));
              }}
            >
              delete row
            </Button>
          </li>
          <li className="p-3">
            <Button
              appearance="primary"
              onClick={() => {
                dispatch(updateField(newForm.fieldInProcess));
              }}
            >
              update row
            </Button>
          </li>
          <li className="p-3">
            <Button
              appearance="primary"
              onClick={() => {
                dispatch(clearNewForm());
              }}
            >
              clear form
            </Button>
          </li>
          <li className="p-3">
            <Button
              appearance="primary"
              onClick={() => {
                axios
                  .post("/uploadForm", {
                    title: newForm.title,
                    content: newForm.fields,
                  })
                  .then((response) => {
                    dispatch(clearNewForm());
                    history.push("/");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              send to server
            </Button>
          </li>
        </ul>
      </Pane>
      <div className="w-1/2 border">
        <ul>
          <li>{newForm.title}</li>
        </ul>
        <ul>
          {newForm.fields.map((item) => (
            <li key={item.inputName}>
              {item.fieldLabel}:
              {<TextInput id={item.inputName} type={item.inputType} />}
            </li>
          ))}
        </ul>
      </div>
    </Pane>
  );
}

export default FormBuilderPage;
