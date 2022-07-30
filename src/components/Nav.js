import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {handleLogout} from "../actions/authedUser";

const Nav = ({dispatch, authedUserId}) => {

    const logout = (e) => {
        e.preventDefault();
        dispatch(handleLogout());
    };

    return (
        <nav >
            <ul style={ {textTransform: 'uppercase'}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/new">New</Link></li>
            <li><span data-testid="employee" >User: {authedUserId}</span></li>
            <li><button onClick={logout}>Logout</button></li>
            </ul>
        </nav>
    );
};

const mapStateToProps = ({authedUser}) => ({
    authedUserId: authedUser.id,
});


export default connect(mapStateToProps)(Nav);
