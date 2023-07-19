import propTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => {
 return <p className={css.notificationMessage}>{message}</p>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;