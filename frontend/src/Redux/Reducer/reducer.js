const initialState = {
    token: "",
  };
  
  const adminTokenReducer = (prevState = initialState, action) => {
    switch (action.type) {
      case "storeAdminToken":
        return {
          ...prevState,
          token: action.token,
        };
      case "removeAdminToken":
        return {
          ...prevState,
          token: "",
        };
      default:
        return initialState;
  
    }
  };
  
  export default adminTokenReducer;