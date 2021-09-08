import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './FeedbackOptions.module.css'

export const FeedbackOptions  = ({options, onHandleClick}) => {
  return (
    <ul className={s.ButtonList}>
      {Object.entries(options).map(([key, value]) => (
        <li className={s.ButtonItem} key={key}>
          <button
            className={s.button}
            id={uuidv4()}
            onClick={() => onHandleClick(key)}
          >{key}</button>
        </li>
      ))}
    </ul>
  )
}