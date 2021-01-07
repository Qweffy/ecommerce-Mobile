

const actions = {
  names: {
    SET_AUTH_USER: "SET_AUTH_USER",
  },
};

const initialuser = {
  user: {
    id:""
  }
}

export const auth = (state = initialuser, { type, payload }) => {
  switch (type) {
    case actions.names.SET_AUTH_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};
