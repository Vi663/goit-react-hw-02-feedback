// import './App.css';
import React, { Component } from 'react';
import { FeedbackOptions  } from '../Buttons/FeedbackOptions ';
import { Statistics } from '../FeedbackSection/Statistics';
import { MainContainer } from '../MainContainer/MainContainer'
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css'

export class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  totalFeedbacks = 0;
  Percentage = 0;
  
  countTotalFeedback = () => {
    this.totalFeedbacks += 1;
  };
  countPositiveFeedbackPercentage = () => {
    this.Percentage = Math.round(this.state.good * 100 /this.totalFeedbacks);
  }

  handleClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }),
    );
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const state = this.state;
    const persentage = this.Percentage;
    const total = this.totalFeedbacks;
    return (
      <MainContainer>
        <h2 className={s.header}>Please leave feedback</h2>
        
        <FeedbackOptions 
          options={this.state}
          onHandleClick={
            this.handleClick
          }
          />
        <h2 className={s.header}>Statistics</h2>
        <ul className={s.StatsList}>
          {Object.entries(state).map(([key, value]) => (
            value > 0 &&
            <li className={s.StatsItem}>
              <span>{key}: {value}</span>
            </li>
          ))}
          <span className={s.StatsResults}>In total: {total}</span>
          <span className={s.StatsResults}>Positive feedback: {persentage} % </span>
        </ul>
        
        {/* <Statistics
          state={this.state}
          persentage={this.Percentage}
          total={this.totalFeedbacks}
        /> */}
      </MainContainer>
    );
  }
}
