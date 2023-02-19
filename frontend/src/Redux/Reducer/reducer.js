const initialState = {
  officeToken: "",
  };
  
  const adminTokenReducer = (prevState = initialState, action) => {
    switch (action.type) {
      case "storeAdminToken":
        return {
          ...prevState,
          officeToken: action.officeToken,
        };
      case "removeAdminToken":
        return {
          ...prevState,
          officeToken: "",
        };
      default:
        return initialState;
  
    }
  };
  
  export default adminTokenReducer;