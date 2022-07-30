import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {handleAddQuestion} from "../actions/questions";

const EmployeePollQuestion = ({dispatch}) => {
    const navigate = useNavigate();
    const [optionOne, setoptionOne] = useState("");
    const [optionTwo, setoptionTwo] = useState("");

    const handleoptionOneChange = (e) => {
        const value = e.target.value;
        setoptionOne(value);
    };

    const handleoptionTwoChange = (e) => {
        const value = e.target.value;
        setoptionTwo(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion(optionOne, optionTwo));
        navigate("/");
    };

    return (
        <div >
            <h1>Would You Rather</h1>
            <p>Create Your Own Poll</p>
            <form onSubmit={handleSubmit}>
                <div >
                    <label
                           data-testid="optionOneTest"
                           >OptionOne</label>
                    <div>
                        <input
                            value={optionOne}
                            onChange={handleoptionOneChange}
                            placeholder="OptionOne"
                            type="text"
                            name="optionOne"
                            id="optionOne"
                            data-testid="optionOne"
                            />
                    </div>
                </div>
                <div>
                    <label data-testid="optionTwoTest">OptionTwo</label>
                    <div >
                        <input
                            value={optionTwo}
                            onChange={handleoptionTwoChange}
                            type="text"
                            placeholder="OptionTwo"
                            name="optionTwo"
                            id="optionTwo"
                            data-testid="optionTwo"
                            />
                    </div>
                </div>
                <div>
                    <button type="submit"
                            data-testid="submit-button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default connect()(EmployeePollQuestion);
