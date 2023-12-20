
import "./box.css";

const Box = ({
    title = this || "NO TITLE",
    content
}) => {

    return (
        <div className="box">
            <div className="lineTop">
                <div className="lineTopTitle">
                    {
                        title.split("").map((value, i) => (
                            <span 
                                key={"title:" + i} 
                                style={{ "--title-index": i }}
                            >{value}</span>
                        ))
                    }
                </div>
            </div>
            <div className="lineLeft">
                <div className="boxContent">{content}</div>
            </div>
            <div className="lineBottom"></div>
        </div>
    );
};

export default Box;