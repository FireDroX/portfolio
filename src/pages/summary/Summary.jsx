import "./Summary.css";

import { useEffect, useState } from "react";

import Box from "../../components/box/Box";
import SubjectList from "../../components/subject_list/SubjectList";
import CustomSvg from "../../utils/CustomSvg";

import { preview_16_9, preview_9_16 } from "../../utils/images";



const Summary = () => {
    document.title = "Portfolio"

    const [ bgImages, setBgImages ] = useState(() => {
        const width = window.innerWidth;

        if(width <= 750) return preview_9_16;
        else return preview_16_9;
    });

    useEffect(() => {
        const handleWidth = () => {
            const width = window.innerWidth;

            if(width <= 750 && bgImages !== preview_9_16) setBgImages(preview_9_16);
            else if(width > 750 && bgImages !== preview_16_9) setBgImages(preview_16_9);
        }

        window.addEventListener("resize", handleWidth);

        return (() => {
            window.removeEventListener("resize", handleWidth);
        })
    }, [bgImages]);



    return (
        <div className="summary__content">
            <div className="summary__grid">
                <div className="summary__box1">
                    <div>
                        <Box 
                            title={"PREVIEW"}
                            content={
                                <div className="preview">
                                    <div className="preview__filter"></div>
                                    <div>
                                        {
                                            bgImages.map((url, index) => (
                                                <img 
                                                    key={"previewImg:" + index}
                                                    className="sumarry__image"
                                                    src={url}
                                                    alt={"preview_" + index}   
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            }
                        />
                    </div>
                    <div>
                        <Box 
                            title={"README.md"}
                            content={
                                <div className="readme">
                                    <p>
                                        {
                                            ("Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, eos officia magni sit nisi iusto quisquam possimus cum velit, dolor temporibus enim nesciunt at Placeat molestias nobis recusandae itaque suscipit repellat doloremque cum sint sit, amet asperiores expedita.").split(" ").map((value, i) => (
                                                <span
                                                    key={"readme:" + i}
                                                    style={{"--readme-index": i}}
                                                >{value + " "}</span>
                                            ))
                                        }
                                    </p>
                                </div>
                            }
                        />
                    </div>
                </div>
                <div className="summary__box2">
                    <Box 
                        title={"SUBJECT DIRECTORY"}
                        content={
                            <div className="subject">
                                <div className="subjectTitle">
                                    <CustomSvg name={"folder"} color={"var(--color-accent)"} />
                                    <p>
                                        {("ADRIEN/DIRECTORY/PORTFOLIO").split("").map((value, i) => (
                                            <span 
                                                key={"name:" + i} 
                                                style={{"--name-index": i}}
                                            >{value}</span>
                                        ))}
                                    </p>
                                </div>
                                <div className="subjectList">
                                    {
                                        [ "HOME", "ABOUT", "PROJECTS", "CONTACTS" ].map((text, i) => ( 
                                            <SubjectList 
                                                key={"subjects:" + i} 
                                                subject={text}
                                                nav={"/" + text.toLowerCase()}
                                            />
                                        ))
                                    }
                                </div>
                                <br />
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    )
};

export default Summary;