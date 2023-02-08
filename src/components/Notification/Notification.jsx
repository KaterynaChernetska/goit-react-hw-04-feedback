import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <div>
      <span className={css.msg}>{message}</span>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
