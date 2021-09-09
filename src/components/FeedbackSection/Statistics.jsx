import React from 'react';
import s from './Statistics.module.css'

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.StatsList}>
    <li className={s.StatsItem}>Good: {good}</li>
    <li className={s.StatsItem}>Neutral: {neutral}</li>
    <li className={s.StatsItem}>Bad: {bad}</li>
    <li className={s.StatsResults}>In total: {total}</li>
    <li className={s.StatsResults}>Positive feedback: {positivePercentage} % </li>
  </ul>
  )
}
