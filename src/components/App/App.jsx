import React, { Component } from 'react';
import { FeedbackOptions  } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { MainContainer } from '../MainContainer/MainContainer'
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

export class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good * 100 /this.countTotalFeedback());
  }

  handleClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }),
    );
  };

  render() {
    const {good, neutral, bad} = this.state;
    const percentage = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();
    const options = Object.keys(this.state);
    return (
      <MainContainer>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={options}
            onHandleClick={this.handleClick}/>
        </Section>
        
        {total ? (
          <Section title='Statistics'>
          <Statistics
            statistics={this.state}
            total={total}
            positivePercentage={percentage}
          />
        </Section>
        )
        : <Notification message="No feedback given"/>}
      </MainContainer>
    );
  }
}
