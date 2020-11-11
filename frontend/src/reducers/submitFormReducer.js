const submitFormReducer = (
  state = {
    title: "",
    id: "",
    fields: [],
    data: [],
  },
  action
) => {
  switch (action.type) {
    case "INIT_FORM":
      return {
        title: action.title,
        id: action.id,
        fields: action.fields,
        data: [
          ...action.fields.reduce((acc, curr) => {
            acc.push({ fieldLabel: curr.fieldLabel, value: "" });
            return acc;
          }, []),
        ],
      };
    case "UPDATE_INFO":
      return {
        ...state,
        data: state.data.map((field) => {
          if (field.fieldLabel.localeCompare(action.fieldLabel) === 0) {
            field.value = action.value;
          }
          return field;
        }),
      };
    default:
      return { ...state };
  }
};
export default submitFormReducer;
