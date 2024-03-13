const initialState = {
    user: {}
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          ...action.payload
        };
      case 'LOGOUT':
        return {
            ...state,
            user: {}
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;