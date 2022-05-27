import React, { useEffect, useState } from "react";
import background from "../../assets/backgrounds/main-bg.png";
import memcard from "../../assets/icons/memcard.png";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import CheckpointCard from "../../components/Checkpoint/CheckpointCard";
import { routes } from "../../Routes";
import clock from "../../assets/icons/clock.png";
import darkSools from "../../assets/icons/dark-souls-bonfire.gif";
import "./Checkpoints.css";
import { useCallback } from "react";

export default function Checkpoints() {
  const [checkpoints, setCheckpoints] = useState([]);
  // let list=[1,2,3,4,5,6,7]
  useEffect(() => {
    fetch("http://localhost:8000/checkpoints")
      .then((res) => res.json())
      .then((data) => {
        setCheckpoints(data);
      });
  }, []);
  return (
    <>
      <div className="background">
        <img src={background} alt="background" />
      </div>

      <div className="grid">
        <Logo />
        <Navbar links={routes} />
      </div>
      <div className="Card">
        <textarea
          id="w3review"
          name="w3review"
          rows="2"
          cols="50"
          placeholder="SAVE YOUR PROGRESS"
        ></textarea>

        <hr></hr>
        <input type="submit" value="SAVE" />
      </div>
      <div className="Cards">
        {checkpoints.map((checkpoint) => (
          <CheckpointCard
            date={checkpoint.formattedCheckpointDate}
            username={checkpoint.username}
            content={checkpoint.content}
            id={checkpoint.id}
            key={checkpoint.id}
            isShared={false}
          />
        ))}
      </div>

      <div className="footer">
        <img src={darkSools} alt="clock" />
        <span>THE INTERNET CHECKPOINT | TICP TEAM 2022</span>
      </div>
    </>
  );
}
