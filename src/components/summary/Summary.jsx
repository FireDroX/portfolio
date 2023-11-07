import React, { useState, useEffect } from "react";

import "./summary.css";

import Box from "./box/Box";
import CustomSvg from "../../utils/CustomSvg";
import SubjectList from "./subject_list/SubjectList";

const SUBJECTS = [
  "1",
  "2"
]

const Bubble = ({ x, y, radius, initialSpeedX, initialSpeedY, id, bubbles, updateBubbleSpeed, movement  }) => {
  const [position, setPosition] = useState({ x, y });
  const [speedX, setSpeedX] = useState(initialSpeedX);
  const [speedY, setSpeedY] = useState(initialSpeedY);

  useEffect(() => {
    const updatePosition = () => {
      if(movement === false) return;
      const newX = position.x + speedX;
      const newY = position.y + speedY;

      if (newX + 2 * radius > window.innerWidth || newX < 0) {
        setSpeedX(speedX * -1);
      }

      if (newY + 2 * radius > window.innerHeight || newY < 0) {
        setSpeedY(speedY * -1);
      }

      // Check for collisions with other bubbles
      bubbles.forEach((bubble) => {
        if (bubble.id !== id) {
          const dx = newX - bubble.x;
          const dy = newY - bubble.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < radius + bubble.radius) {
            setSpeedX(speedX * -1);
            setSpeedY(speedY * -1);
            updateBubbleSpeed(bubble.id, bubble.initialSpeedX * -1, bubble.initialSpeedY * -1);
          }
        }
      });

      setPosition({ x: newX, y: newY });
    };

    const interval = setInterval(updatePosition, 16); // 60 frames per second
    return () => clearInterval(interval);
  }, [position, radius, speedX, speedY, id, bubbles, initialSpeedX, initialSpeedY, updateBubbleSpeed, movement ]);

  return (
    <div
      className="bubble"
      style={{
        left: position.x,
        top: position.y,
        width: radius * 2,
        height: radius * 2,
      }}
      key={id}
    ></div>
  );
};

function Summary() {
  const [bubbles, setBubbles] = useState([]);
  const [movement, setMovement] = useState(true);
  const nbBubbles = 5;
  

  const createBubble = () => {
    const id = bubbles.length;
    const radius = Math.floor(Math.random() * 40) + 30;
    const x = Math.random() * (window.innerWidth - 2 * radius);
    const y = Math.random() * (window.innerHeight - 2 * radius);
    const initialSpeedX = (Math.random() - 0.5) * 20;
    const initialSpeedY = (Math.random() - 0.5) * 20;

    const updateBubbleSpeed = (bubbleId, newSpeedX, newSpeedY) => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) =>
          bubble.id === bubbleId
            ? { ...bubble, initialSpeedX: newSpeedX, initialSpeedY: newSpeedY }
            : bubble
        )
      );
    };

    const bubble = { id, x, y, radius, initialSpeedX, initialSpeedY, updateBubbleSpeed, movement };

    setBubbles((prevBubbles) => [...prevBubbles, bubble]);

    return bubble;
  };

  const handleStop = (stop) => {
    setMovement(stop);
    
    bubbles.forEach((bubble) => {
      bubble.movement = stop;
    });
  };
  
  const spawnBubbles = () => {
    setBubbles([]);
    for (let i = 0; i < nbBubbles; i++) {
      createBubble();      
    };
  };

  useEffect(() => {
    spawnBubbles();
  }, []);  

  return (
    <section id="summary">
      
      {bubbles.map((bubble) => (
        <Bubble key={bubble.id} {...bubble} bubbles={bubbles} updateBubbleSpeed={bubble.updateBubbleSpeed} />
      ))}


      <div>
        <div className="circleExt"></div>
        <div className="circleInt"></div>
      </div>
      
      <div className="summaryContent">
        <Box
          title={"SUBJECT DIRECTORY"} 
          content={
            <div className="subject">
              <div className="subjectTitle">
                <CustomSvg name={"folder"} color={"var(--color-outline)"} />
                <p>ADRIEN/DIRECTORY/PORTFOLIO</p>
              </div>
              <div className="subjectList">
                {[
                  "CURRICULUM VITAE", 
                  "PROJECTS", 
                  "SKILLS", 
                  "ACHIEVEMENTS", 
                  "/* something /*", 
                  "CONTACTS"
                ].map((text) => ( 
                  <SubjectList subject={text} />
                ))}
              </div>
              <div className="bubbleSettings">
                <button onClick={() => handleStop(!movement)}>
                  {
                    movement ?
                    <CustomSvg name={"pause"} color={"var(--color-outline)"} /> :
                    <CustomSvg name={"play"} color={"var(--color-outline)"} />
                  }
                </button>
                <button onClick={createBubble}>
                  <CustomSvg name={"plus"} color={"var(--color-outline)"} />
                </button>
              </div>
            </div>
        }/>
        <Box 
          title={"README.md"}
        />
        <Box 
          title={"PREVIEW"}
        />
      </div>

    </section>
  );
}

export default Summary;
