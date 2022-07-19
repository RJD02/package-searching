import { ActionType } from "./../actionTypes/index";

interface SearchRepAction {
  type: ActionType.SEARCH_REPO;
}

interface SearchRepActionSuccess {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

interface SearchRepActionError {
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string;
}

export type Action =
  | SearchRepAction
  | SearchRepActionSuccess
  | SearchRepActionError;
