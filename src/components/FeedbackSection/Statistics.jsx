import React from 'react';

export const Statistics = ({ state, total, persentage }) => {
  <ul className="StatsName">
    {Object.entries(state).map(([key, value]) => (
      value > 0 &&
      <li className="StatsItem">
        <span>{key}: {value}</span>
      </li>
    ))}
    <span>In total: {total}</span>
    <span>Positive feedback: {persentage} % </span>
  </ul>
}
