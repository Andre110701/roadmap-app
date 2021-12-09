const INITIAL_STATE = { playList: [] }

type ActionType = {
  type: string;
  payload: any;
}

const playListReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case "PLAYLIST_FETCHED":
      return {
        ...state, playList: action.payload
      }
    default:
      return state
  }
}
export default playListReducer;