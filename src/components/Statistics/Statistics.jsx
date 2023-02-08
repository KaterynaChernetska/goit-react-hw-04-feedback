import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.listWrap}>
      <ul className={css.list}>
        <li className={css.listItem}>Good: {good}</li>
        <li className={css.listItem}>Neutural: {neutral} </li>
        <li className={css.listItem}>Bad: {bad} </li>
        <li className={css.listItem}>Total: {total}</li>
        {positivePercentage ? (
          <li className={css.listItem}>Positive feedback: {positivePercentage}%</li>
        ) : (
          <li className={css.listItem}>Positive feedback: 0%</li>
        )}
      </ul>
    </div>
  );
};

Statistics.propTypes={
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,
}