import { Reducer } from "redux";
import { copyLinkType, copiedLinkActionTypes } from "../actions/copiedLink";

const initialState: string| null = sessionStorage.getItem("copied");

const copyReducer: Reducer<string, copyLinkType> = (
  state: string = initialState ? initialState : '',
  action
) => {
  switch (action.type) {
    case copiedLinkActionTypes.LINK_COPY:
      sessionStorage.setItem("copied", action.id);
      return action.id;
    default:
      return state;
  }
};
export default copyReducer;
