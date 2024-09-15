const initialStateUser = {
  name: "",
  nic: "",
  createdAt: "",
};

export default function userReducer(state = initialStateUser, action) {
  switch (action.type) {
    case "createUser":
      return {
        ...state,
        name: action.payload.name,
        nic: action.payload.nic,
        createdAt: action.payload.createdAt,
      };
    case "updateUser":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}

export function createUser(name, nic) {
  return {
    type: "createUser",
    payload: { name: name, nic: nic, createdAt: new Date().toISOString() },
  };
}

export function updateUser(name) {
  return {
    type: "updateUser",
    payload: name,
  };
}
