import {types} from "../types/types";

export const serError = (err) => ({
  type: types.login,
  payload: err
})

export const removeError = () => ({
  type: types.uiRemoveError
})
