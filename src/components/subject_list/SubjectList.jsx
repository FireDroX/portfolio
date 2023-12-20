import "./subjectList.css";
import { useNavigate } from "react-router-dom";

const SubjectList = ({ subject = String, nav = String }) => {
    const navigate = useNavigate();
    const handleNavigate = () => navigate(nav);

    return (
        <div className="subjectDiv">
            <div className="subjectLeft"></div>
            <button
                className="subjectText"
                onClick={handleNavigate}
            >
                {
                    subject.split("").map((value, i) => (
                        <span
                            key={"subjectText:" + i}
                            className="subjectText-content"
                            style={{"--subject-index": i}}
                        >{value}</span>
                    ))
                }
            </button>
        </div>
    );
}

export default SubjectList;