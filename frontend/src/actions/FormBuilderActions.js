///////////BUILDING FORM ACTIONS ////////////////////////

export const addField = () => {
  return {
    type: "ADD_FIELD",
  };
};
export const deleteField = (fieldLabel) => {
  return {
    type: "DELETE_FIELD",
    fieldLabel: fieldLabel,
  };
};
export const findField = (fieldLabel) => {
  return {
    type: "FIND_FIELD",
    fieldLabel: fieldLabel,
  };
};
export const updateField = (field) => {
  return {
    type: "UPDATE_FIELD",
    field: field,
  };
};
export const updateNewField = (property, value) => {
  return {
    type: "UPDATE_NEW_FIELD",
    property: property,
    value: value,
  };
};
export const addTitle = (title) => {
  return {
    type: "UPDATE_TITLE",
    title: title,
  };
};
export const clearNewForm = () => {
  return {
    type: "CLEAR_NEW_FORM",
  };
};
