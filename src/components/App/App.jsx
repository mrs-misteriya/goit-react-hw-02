import { useState, useEffect } from "react";
import css from "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const saveFeedbacks = localStorage.getItem("clickFeedbacks");
    if (saveFeedbacks !== null) {
      return JSON.parse(saveFeedbacks);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  function resetFeedback() {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  useEffect(() => {
    localStorage.setItem("clickFeedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const perсentGoodFeedback = Math.round(
    (feedbacks.good / totalFeedback) * 100
  );

  return (
    <>
      <div className={css.container}>
        <Description />
        <Options
          onUpdate={updateFeedback}
          onReset={resetFeedback}
          total={totalFeedback}
        />
        {totalFeedback !== 0 ? (
          <Feedback
            feedbacks={feedbacks}
            total={totalFeedback}
            onPositive={perсentGoodFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}
