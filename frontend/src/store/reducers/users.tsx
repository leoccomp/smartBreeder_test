export default function users(state = [], action) {
  switch (action.type) {
    case "ADD_USER":
      return [...state, { email: action.payload.text, password: action.payload.text }];
    default:
      return state;
  }
}