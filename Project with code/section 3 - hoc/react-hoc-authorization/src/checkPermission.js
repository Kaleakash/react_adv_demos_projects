const checkPermission = (props) => {
    return props.userRole === "admin";
  };


  export default checkPermission;