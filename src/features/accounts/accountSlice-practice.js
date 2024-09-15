const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "requestLoan":
      return {
        ...state,
        loan: action.payload.amount,
        balance: state.balance + action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case "payLoan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        loanPurpose: "",
      };
    default:
      return state;
  }
}


export function deposit(amount) {
  return { type: "deposit", payload: amount };
}

export function withdraw(amount) {
  return { type: "deposit", payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: "requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}

export function payLoan() {
  return {
    type: "payLoan",
  };
}