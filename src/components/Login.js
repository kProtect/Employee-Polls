import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import {handleLogin} from "../actions/authedUser";

const Login = ({dispatch, online}) => {
    const [username, setUsername] = useState("sarahedo");
    const [password, setPassword] = useState("password123");

    if (online) {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get('redirectTo');
        return <Navigate to={redirectUrl ? redirectUrl : "/"}/>;
    }

    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(username, password));
        setUsername("");
        setPassword("");
    };

    return (
        <div>
            <h1 data-testid="employee-polls">Employee Polls</h1>
            <img src={"https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261__480.jpg"} alt="avartar img"/>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label >User</label>
                    <div>
                        <input
                            value={username}
                            onChange={handleUsername}
                            type="text"
                            name="username"
                            id="username"
                            data-testid="username"
                           />
                    </div>
                </div>
                <div >
                    <label >Password</label>
                    <div>
                        <input
                            value={password}
                            onChange={handlePassword}
                            type="password"
                            name="password"
                            id="password"
                            data-testid="password"
                           />
                    </div>
                </div>
                <div >
                    <button type="submit"
                            data-testid="submit"
                            >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = ({authedUser}) => ({
    online: !!authedUser,
});

export default connect(mapStateToProps)(Login);
