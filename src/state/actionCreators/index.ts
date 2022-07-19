import { Action } from "./../actions/index";
import { ActionType } from "./../actionTypes/index";
import axios from "axios";
import { Dispatch } from "redux";

export const searchRepo = (name: String) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_REPO });

    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search?text=${name}`
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({ type: ActionType.SEARCH_REPO_SUCCESS, payload: names });
    } catch (err: any) {
      dispatch({ type: ActionType.SEARCH_REPO_ERROR, payload: err?.message });
    }
  };
};
