export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className="FeedbackOptions">
      <div className="FeedbackOptionsBtns">
        <button
          onClick={() => onLeaveFeedback("good")}
          className="FeedbackOptionsBtn"
        >
          Good
        </button>
        <button
          onClick={() => onLeaveFeedback("neutral")}
          className="FeedbackOptionsBtn"
        >
          Neutral
        </button>
        <button
          onClick={() => onLeaveFeedback("bad")}
          className="FeedbackOptionsBtn"
        >
          Bad
        </button>
      </div>
    </div>
  );
}
