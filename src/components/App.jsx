import React, { useState  } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';



export const App = () =>{
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  // const [feedBack, setfeedBack] = useState({
  //    good: 0,
  //    neutral: 0,
  //    bad: 0,
  // });

  // const onLeaveFeedback = name => {
  //   setfeedBack(prevValue => {
  //   return {[name]: prevValue[name] +1 }
  //  })
  // };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


const onLeaveFeedback = option => {
  switch (option) {
    case 'good':
      setGood(prevGood => prevGood + 1);
      break;
    case 'neutral':
      setNeutral(prevNeutral => prevNeutral + 1);
      break;
    case 'bad':
      setBad(prevBad => prevBad + 1);
      break;
    default:
      return;
  }
};

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }

  const countPositivePercentage = () => {
    const  PositiveFeedbackPercentage =
      (good / countTotalFeedback()) * 100;
    return Math.round(PositiveFeedbackPercentage);
  }

    return (
      <>
        <Section title="Pleease leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
            >
          </FeedbackOptions>
        </Section>
        <Section title="Statistics">
          { countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
