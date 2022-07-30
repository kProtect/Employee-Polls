import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const PrivateRoute = ({children, online}) => {
    const redirectUrl = window.location.href.toString().split(window.location.host)[1];

    return online ? children : <Navigate to={`/login?redirectTo=${redirectUrl}`}/>;
};

const mapStateToProps = ({authedUser}) => ({
    online: !!authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);
