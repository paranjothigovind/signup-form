// initial state of the reducer
const initialState = {
    users: [],
    isAuthenticated: false,
    currentUser: {}
};
  
  // function to update state
  function auth(state = initialState, action: any) {
    // destructuring the action from function
    const { type, payload } = action;
  
    // switch to match type and update payload
    switch (type) {
      case "SIGNUP":
        return {
          ...state,
          users: payload
        };

        case "LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                currentUser: payload
            };

        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                currentUser: {}
            };
  
      // return default state if the type doesnt match any case
      default:
        return state;
    }
  }
  
  export default auth;
  