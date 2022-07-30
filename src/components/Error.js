import {connect} from "react-redux";

const Error = () => {
    return (
        <div>
            <h1>ERROR 404 Go Back</h1>
        </div>
    );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Error);
