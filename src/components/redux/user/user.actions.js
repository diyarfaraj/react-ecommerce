// functiion that returns objects
// each object is in the correct format that the actions needs to be

//here we hold the user thats created from the userAUth

export const setCurrentUser = user => ({
  type: "SET_CURRENT_USER",
  payload: user
});
