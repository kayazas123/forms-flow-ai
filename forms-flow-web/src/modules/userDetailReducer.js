import ACTION_CONSTANTS from "../actions/actionConstants";

const initialState = {
  bearerToken: '',
  roles: '',
  userDetail:[],
  isAuthenticated:false,
  currentPage:'',
}

export default (state = initialState, action)=> {
  switch (action.type) {
    case ACTION_CONSTANTS.SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload};
    case ACTION_CONSTANTS.SET_USER_TOKEN:
      return {...state, bearerToken: action.payload};
    case ACTION_CONSTANTS.SET_USER_ROLES:
      return {...state, roles: action.payload};
    case ACTION_CONSTANTS.SET_USER_DETAILS:
      return {...state, userDetail:action.payload}
    case ACTION_CONSTANTS.SET_USER_AUTHENTICATION:
      return {...state, isAuthenticated:action.payload}
    default:
      return state;
  }
}
