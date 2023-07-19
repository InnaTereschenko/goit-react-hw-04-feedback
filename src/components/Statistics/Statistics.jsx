import propTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positiveFedback}) => {
    return (
    <ul className={css.feedbackList}>
            <li className={css.feedbackItem}>Good: {good}</li>
            <li className={css.feedbackItem}>Neutral: {neutral}</li>
            <li className={css.feedbackItem}>Bad: {bad}</li>
            <li className={css.feedbackItem}>Total: {total}</li>
            <li className={css.feedbackItem}>Positive feedback: {positiveFedback} %</li>
    </ul>
)
}
Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positiveFedback: propTypes.number.isRequired,
}
export default Statistics;