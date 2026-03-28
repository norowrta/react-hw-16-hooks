import { useContext } from "react";
import { FeedbackContext } from "../FeedbackContext";

export default function FeedbackOptions() {
  const { onLeaveFeedback } = useContext(FeedbackContext);
  const options = ["good", "neutral", "bad"];

  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}
