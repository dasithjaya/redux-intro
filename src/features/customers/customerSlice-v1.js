// ============ Initial State ============
const initialCustomer = {
  fullName: "",
  NIC: "",
  createdAt: "",
};


// ============ Reducer Function ============
export default function customerReducer(state = initialCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        NIC: action.payload.NIC,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}


// ============ Action Creators ============
export function createCustomer(fullName, NIC) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, NIC, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}
