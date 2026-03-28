import { useState, useRef } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import { FeedbackContext } from "./FeedbackContext";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const appContainerRef = useRef(null);

  const onLeaveFeedback = (option) => {
    if (option === "good") setGood((prev) => prev + 1);
    if (option === "neutral") setNeutral((prev) => prev + 1);
    if (option === "bad") setBad((prev) => prev + 1);
  };

  const totalFeedback = good + neutral + bad;

  return (
    <FeedbackContext.Provider value={{ good, neutral, bad, onLeaveFeedback, totalFeedback }}>
      <div ref={appContainerRef}>
        <Section title="Please leave feedback">
          <FeedbackOptions />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics />
          ) : (
            <p>There is no feedback</p>
          )}
        </Section>
      </div>
    </FeedbackContext.Provider>
  );
}
