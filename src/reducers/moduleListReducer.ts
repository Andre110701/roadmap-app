const INITIAL_STATE = { moduleId: "", modulesList: [] }

type ActionType = {
  type: string;
  payload: any;
}

const moduleListReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case "MODULES_LIST_FETCHED":
      return {
        ...state, modulesList: action.payload
      }
    case "SET_MODULE_ID":
      return {
        ...state, moduleId: action.payload
      }
    default:
      return state
  }
}
export default moduleListReducer;