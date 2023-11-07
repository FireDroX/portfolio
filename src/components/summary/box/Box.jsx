
import "./box.css";

const Box = ({
    title = String,
    content = <div />
}) => {

    return (
        <div className="box">
            <div className="lineTop">
                <div className="lineTopTitle">{title}</div>
            </div>
            <div className="lineLeft">
                <div className="boxContent">{content}</div>
            </div>
            <div className="lineBottom"></div>
        </div>
    );
};

export default Box;