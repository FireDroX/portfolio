import "./Background.css";

const Background = () => {
    const time = Date.now();
    const date = () => { 
        return `${(new Date(time).getDate()).toString().padStart(2, '0')}.${(new Date(time).getMonth() + 1).toString().padStart(2, '0')}.${new Date(time).getFullYear()}` 
    }

    return (
        <div className="background__container">
            <div className="background">
                <div className="background__grid">
                    <div className="background__border__top">
                        <div></div>
                        <span>
                            {(date().split("").map((value, i) => (
                                <span 
                                    key={"date:" + i} 
                                    style={{"--date-index": i}}
                                >{value}</span>
                            )))}
                        </span>
                        <div></div>
                    </div>
                    <div className="background__border__flex">
                        <div className="background__border"></div>
                        <div className="background__border"></div>
                    </div>
                    <div className="background__border__bottom"></div>
                </div>
            </div>
        </div>
    )
}

export default Background;