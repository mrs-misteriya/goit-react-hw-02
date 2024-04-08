import css from "./Feedback.module.css";

export default function Feedback({
  feedbacks: { good, neutral, bad },
  total,
  onPositive,
}) {
  return (
    <div className={css.conrainer}>
      <p className={css.stat}>
        Good: <span>{good}</span>
      </p>
      <p className={css.stat}>
        Neutral: <span>{neutral}</span>
      </p>
      <p className={css.stat}>
        Bad: <span>{bad}</span>
      </p>
      <p className={css.stat}>
        Total: <span>{total}</span>
      </p>
      <p className={css.stat}>
        Positive: <span>{onPositive}</span> %
      </p>
    </div>
  );
}
