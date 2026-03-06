import { useState } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (option) => {
    if (option === "good") setGood((prev) => prev + 1);
    if (option === "neutral") setNeutral((prev) => prev + 1);
    if (option === "bad") setBad((prev) => prev + 1);
  };

  const totalFeedback = good + neutral + bad;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <p>There is no feedback</p>
        )}
      </Section>
    </>
  );
}
