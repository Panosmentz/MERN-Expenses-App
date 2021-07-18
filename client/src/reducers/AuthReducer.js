export default (state, action) => {
  switch (action.type) {
    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        ...action.payload,
        registration: true,
        loading: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        ...action.payload,
        registration: false,
        isAuthenticated: true,
        loading: false,
      };
    case "REGISTER_FAIL":
    case "AUTH_ERROR":
    case "LOGIN_FAIL":
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};
