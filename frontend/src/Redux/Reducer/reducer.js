const initialState = {
  teacherData: {},
  };
  
  const Reducer = (prevState = initialState, action) => {
    switch (action.type) {
      case "storeTeacherData":
        return {
          ...prevState,
          teacherData: action.teacherData,
        };

      default:
        return initialState;
  
    }
  };
  
  export default Reducer;