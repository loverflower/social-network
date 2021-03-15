import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export const hocComponent = (Name) => {
  let Wrapper = (props) => {
    if (!props.asAuth) return <Redirect to="/login" />;
    return <Name {...props} />;
  };

  const mapToState = (state) => {
    return {
      asAuth: state.auth.auth,
    };
  };

  const hocWrapper = connect(mapToState)(Wrapper);
  return hocWrapper;
};
