import clsx from "clsx";
import styles from "./Feedback.module.css";
import Notification from "../Notification/Notification";

const Feedback = ({ votes }) => {
    const total = votes.good + votes.neutral + votes.bad;
  
    if (total === 0) {
      return <Notification />;
    }
  
    return (
      <div className={clsx(styles.fdbContainer)}>
        <p>Good: {votes.good}</p>
        <p>Neutral: {votes.neutral}</p>
        <p>Bad: {votes.bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {total === 0 ? 0 : Math.round((votes.good / total) * 100)}%</p>
      </div>
    );
  };
  

export default Feedback;