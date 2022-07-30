import {connect} from "react-redux";
import {Link} from "react-router-dom";

const EmployeePolls = ({question, author}) => {
    return (
        <Link to={'questions/' + question.id}>
        <div>
            <div >
                <img src={author?.avatarURL} alt="avartar img"/>
            </div>
            <p></p>
            <div>
                <ul>
                <li><div >{question.author}</div></li>
                <li><p>{new Date(question.timestamp).toDateString()}</p></li>
                <li><p>Show</p></li>
                </ul>
            </div>
        </div>
        </Link>
    );
}

export default connect()(EmployeePolls);
