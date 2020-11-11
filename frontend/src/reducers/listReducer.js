const listReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_BY_SERVER":
      return [...action.list];
    default:
      return [...state];
  }
};
export default listReducer;
