const initialState = {
  users: [
    { id: 1, name: "Kim Chi" },
    { id: 2, name: "Hỏi Kim Chi" },
  ],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USERS":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
}
