import propTypes from 'prop-types';
import css from './FeedbackButtons.module.css';


const FeedbackButtons = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.options}>
      {options.map((option, index) => (
        <button key={index}
         onClick={() => onLeaveFeedback(option)}
          className={css.feedbackBtn}
        
        >
          
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackButtons.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackButtons;
