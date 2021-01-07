

const actions = {
  names: {
    SET_AUTH_USER: "SET_AUTH_USER",
  },
};

export const auth = (state = { user: undefined }, { type, payload }) => {
  switch (type) {
    case actions.names.SET_AUTH_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};
