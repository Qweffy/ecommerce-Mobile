const names = {
  SET_AUTH_USER: "SET_AUTH_USER",
};
const actions = {
  names,
  setUser: (user) => ({ type: names.SET_AUTH_USER, payload: user }),
};

export default actions;
