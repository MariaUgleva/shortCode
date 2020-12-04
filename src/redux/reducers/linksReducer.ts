import { Reducer } from "redux";
import { linksActionTypes, LinkActions } from "../actions/linksActions";
import { linkReduxType } from "../../type";

let links: string | null = sessionStorage.getItem('links');
let initialState: Array<linkReduxType> = [];
if (links) initialState = JSON.parse(links);


const linksReducer: Reducer<Array<linkReduxType>, LinkActions> = (
  state: Array<linkReduxType> = initialState,
  action
) => {
  switch (action.type) {
    case linksActionTypes.LINK_ADD:
      const newLinks = state.map((item) => {
        return { ...item };
      });
      newLinks.push(action.data);
      sessionStorage.setItem('links', JSON.stringify(newLinks));
      return newLinks;
    default:
      return state;
  }
};
export default linksReducer;
