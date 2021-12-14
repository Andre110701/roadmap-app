const INITIAL_STATE = { playList: [] }

type ActionType = {
  type: string;
  payload: any;
}

const videoReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case "COMPLETED_LIST":
      return {
        ...state, video: action.payload
      }
  }
}
export default videoReducer;