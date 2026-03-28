import { useContext } from "react";
import { FeedbackContext } from "../FeedbackContext";

export default function Statistics() {
  const { good, neutral, bad, totalFeedback } = useContext(FeedbackContext);

  const positivePercentage =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}
