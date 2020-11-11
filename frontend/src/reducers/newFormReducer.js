const newFormReducer = (
  state = {
    title: "",
    fields: [],
    fieldInProcess: { fieldLabel: "", inputName: "", inputType: "" },
    keyToUpdate: "",
  },
  action
) => {
  switch (action.type) {
    case "ADD_FIELD":
      let flag = false;
      state.fields.map((item) =>
        item.fieldLabel.localeCompare(state.fieldInProcess.fieldLabel) === 0
          ? (flag = true)
          : null
      );
      if (flag === false) {
        return {
          ...state,
          fields: [...state.fields, state.fieldInProcess],
          fieldInProcess: { fieldLabel: "", inputName: "", inputType: "" },
          keyToUpdate: "",
        };
      }
      return { ...state };
    case "DELETE_FIELD":
      return {
        ...state,
        fields: state.fields.filter(
          (field) => field.fieldLabel.localeCompare(state.keyToUpdate) !== 0
        ),
        keyToUpdate: "",
      };
    case "UPDATE_FIELD":
      return {
        ...state,
        fields: state.fields.map((field) => {
          if (field.fieldLabel.localeCompare(state.keyToUpdate) === 0) {
            field.fieldLabel = action.field.fieldLabel;
            field.inputName = action.field.inputName;
            field.inputType = action.field.inputType;
          }
          return field;
        }),
        fieldInProcess: {
          fieldLabel: "",
          inputName: "",
          inputType: "",
        },
        keyToUpdate: "",
      };
    case "FIND_FIELD":
      return state.fields
        .map((item) => {
          if (action.fieldLabel.localeCompare(item.fieldLabel) === 0) {
            return {
              ...state,
              fieldInProcess: {
                fieldLabel: item.fieldLabel,
                inputName: item.inputName,
                inputType: item.inputType,
              },
              keyToUpdate: item.fieldLabel,
            };
          }
        })
        .filter((item) => item !== undefined)[0];

    case "UPDATE_NEW_FIELD":
      return {
        ...state,
        fieldInProcess: {
          ...state.fieldInProcess,
          [action.property]: action.value,
        },
      };
    case "UPDATE_TITLE":
      return { ...state, title: action.title };
    case "CLEAR_NEW_FORM":
      return {
        title: "",
        fields: [],
        fieldInProcess: { fieldLabel: "", inputName: "", inputType: "" },
        keyToUpdate: "",
      };
    default:
      return { ...state };
  }
};
export default newFormReducer;
