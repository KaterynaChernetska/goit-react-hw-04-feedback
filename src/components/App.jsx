import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  log = name => {
    console.log(this.state[name]);
  };

  onLeaveFeedback = name => {

   this.setState(prevValue => {
    return {[name]: prevValue[name] +1 }
   })
  };

  countTotalFeedback() {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  }

  countPositivePercentage() {
    const PositiveFeedbackPercentage =
      (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(PositiveFeedbackPercentage);
  }

  render() {
    return (
      <>
        <Section title="Pleease leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
            >
          </FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.state.good > 0 ||
          this.state.neutral > 0 ||
          this.state.bad > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
