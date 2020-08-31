import * as actionTypes from "./actionTypes";

export const themeUpdated = (theme) => {
  return {
    type: actionTypes.THEME_UPDATE,
    payload: {
        theme: theme
    }
  }
}
