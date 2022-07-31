import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {connect} from "react-redux";
import Nav from "./components/Nav";
import PollQuestions from "./components/PollQuestions";
import EmployeePollQuestion from "./components/EmployeePollQuestion";
import EmployeeVote from "./components/EmployeeVote";
import Login from "./components/Login";
import Leaderboard from "./components/Leaderboard";
import Error from "./components/Error";
import ReRoute from "./components/ReRoute";
import {handleInitialData} from "./actions/shared";

function App({dispatch, online}) {
    useEffect(() => {
        dispatch(handleInitialData());
    });

    return (
        <div>
            {online && <Nav/>}
            <Routes>
                <Route path="/login" exact element={<Login/>}/>
                <Route path="/" element={<ReRoute><PollQuestions/></ReRoute>}/>
                <Route path="/leaderboard" exact element={<ReRoute><Leaderboard/></ReRoute>}/>
                <Route path="/questions/:id" element={<ReRoute><EmployeeVote/></ReRoute>}/>
                <Route path="/add" exact element={<ReRoute><EmployeePollQuestion/></ReRoute>}/>
                <Route path="/404" exact element={<Error/>}/>
            </Routes>
        </div>
    );
}

const mapStateToProps = ({authedUser}) => ({
    online: !!authedUser,
});

export default connect(mapStateToProps)(App);
