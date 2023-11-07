import "./subjectList.css";

const SubjectList = ({ subject = String }) => {
    return (
        <div className="subjectDiv">
            <div className="subjectLeft"></div>
            <button className="subjectText">
                <span className="subjectText-content">{subject}</span>
            </button>
        </div>
    );
}

export default SubjectList;