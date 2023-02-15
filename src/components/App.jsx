import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedBack, setfeedBack] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = name => {
    setfeedBack(prevState => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
  };
  const countTotalFeedback = () => {
    const totalFeedback = feedBack.good + feedBack.neutral + feedBack.bad;
    return totalFeedback;
  };

  const countPositivePercentage = () => {
    const PositiveFeedbackPercentage =
      (feedBack.good / countTotalFeedback()) * 100;
    return Math.round(PositiveFeedbackPercentage);
  };

  return (
    <>
      <Section title="Pleease leave feedback">
        <FeedbackOptions
          options={Object.keys(feedBack)}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={feedBack.good}
            neutral={feedBack.neutral}
            bad={feedBack.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
