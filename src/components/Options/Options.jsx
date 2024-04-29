import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./Options.module.css";

const Options = ({ onUpdate }) => {
    const [votes, setVotes] = useState(() => {
      const storedVotes = JSON.parse(localStorage.getItem("votes"));
      return storedVotes || { good: 0, neutral: 0, bad: 0 };
    });
  
    const handleVote = (type) => {
      setVotes((prevVotes) => {
        const updatedVotes = {
          ...prevVotes,
          [type]: prevVotes[type] + 1
        };
        localStorage.setItem("votes", JSON.stringify(updatedVotes));
        return updatedVotes;
      });
    };
  
    const handleReset = () => {
      localStorage.removeItem("votes");
      setVotes({ good: 0, neutral: 0, bad: 0 });
    };
  
    useEffect(() => {
      onUpdate(votes);
    }, [votes, onUpdate]);
  
    return (
      <div className={clsx(styles.btnContainer)}>
        <button className={clsx(styles.btnStyle)} onClick={() => handleVote("good")}>
          Good
        </button>
        <button className={clsx(styles.btnStyle)} onClick={() => handleVote("neutral")}>
          Neutral
        </button>
        <button className={clsx(styles.btnStyle)} onClick={() => handleVote("bad")}>
          Bad
        </button>
        <button className={clsx(styles.btnStyle)} onClick={handleReset}>
          Reset
        </button>
      </div>
    );
  };

export default Options;