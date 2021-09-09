import React, { Component } from 'react';
import { FeedbackOptions  } from '../Buttons/FeedbackOptions ';
import { Statistics } from '../FeedbackSection/Statistics';
import { MainContainer } from '../MainContainer/MainContainer'
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import s from './App.module.css'

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
    const persentage = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();
    return (
      <MainContainer>
        <h2 className={s.header}>Please leave feedback</h2>
        
        <FeedbackOptions 
          options={this.state}
          onHandleClick={
            this.handleClick
          }
        />
        {total ? (
          <Section title='Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={persentage}
          />
        </Section>
        )
        : <Notification message="No feedback given"></Notification>}
      </MainContainer>
    );
  }
}
