export const initialState = {
  task: []
};

export const TASKACTION = {
  ADD_TASK: "ADD_TASK",
  REMOVE_TASK: "REMOVE_TASK"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKACTION.ADD_TASK:
      return {
        ...state,
        task: state.task.concat(action.payload)
      };
    case TASKACTION.REMOVE_TASK:
      return {
        ...state,
        task: state.task.filter((d, index, arr) => index !== action.payload)
      };
    default:
      return state;
  }
};
export default reducer;
