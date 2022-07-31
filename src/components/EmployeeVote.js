import {connect} from "react-redux";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {handleAddAnswer} from "../actions/questions";
import "./EmployeeVoteStyle.css"

const EmployeeVote = ({dispatch, authedUser, question, author}) => {
    const navigate = useNavigate();

    if (!authedUser || !question || !author) {
        return <Navigate to="/404"/>;
    }

    const doneForOptionOne = question.optionOne.votes.includes(authedUser.id);
    const doneForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
    const done = doneForOptionOne || doneForOptionTwo;

    const handleOptionOne = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionOne"));
        navigate("/");
    };

    const handleOptionTwo = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionTwo"));
        navigate("/");
    };

    const totalVote = (option, question) => {
        const numberVotesTotal = question.optionOne.votes.length + question.optionTwo.votes.length;
        switch (option) {
            case "optionOne":
                return question.optionOne.votes.length / numberVotesTotal * 100 + " %";
            case "optionTwo":
                return question.optionTwo.votes.length / numberVotesTotal * 100 + " %";
            default:
                return "";
        }
    };

    return (
        <div data-testid="vote-container">
            <h1 >Poll by {author.id}</h1>
            <div data-testid="avatar-container">
                <img src={author.avatarURL} alt="avatarimg" />
            </div>
            <div >
                <h2 >Would You Rather?</h2>
            </div>

            <div data-testid="option-conatiner" >

                <button className={doneForOptionOne ? "choosedOption" : ""} onClick={handleOptionOne} disabled={done}>
                        <p >{question.optionOne.text}</p>
                        {!done &&<p >Click</p>}{done &&<p className="text-xs">Votes: {question.optionOne.votes.length} ({totalVote("optionOne", question)})</p>}
                </button>

                <button className={doneForOptionTwo ? "choosedOption" : ""} onClick={handleOptionTwo} disabled={done}>
                    <p >{question.optionTwo.text}</p>{!done && <p >Click</p>} {done && <p >Votes: {question.optionTwo.votes.length} ({totalVote("optionTwo", question)})</p> }
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = ({authedUser, users, questions}) => {
    try {
        const question = Object.values(questions).find((question) => question.id === useParams().id);
        const author = Object.values(users).find((user) => user.id === question.author);
        return {authedUser, question, author};
    } catch (e) {
        return <Navigate to="/404"/>;
    }
};

export default connect(mapStateToProps)(EmployeeVote);
