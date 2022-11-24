export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "delete":
      let res = state.student.filter((vl) => vl.id !== payload);
      return { ...state, student: res };
    default:
      return state;
  }
};
