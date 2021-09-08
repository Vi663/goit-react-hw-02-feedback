import s from './MainContainer.module.css';

export const MainContainer = ({ children }) => {
  return (
    <div className={s.mainContainer}>{children}</div>
  )
}