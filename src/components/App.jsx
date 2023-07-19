import { useState } from 'react';

// import { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackButtons from './FeedbackButtons/FeedbackButtons';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // console.log(good, neutral, bad);

  const onLeaveFeedback = evt => {
   
        if (evt === 'Good') {
      setGood (good + 1);
    } else if (evt === 'Neutral') {
      setNeutral (neutral + 1);
    } else if (evt === 'Bad') {
      setBad (bad + 1);
    }
  };

 
 const onTotal = () => {
         return (good + neutral + bad);
};

  const onPercentage = () => {
    if (good === 0) {
      return 0;
    }
    return (
      Math.round((good / onTotal()) * 100)
    )
  }



return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackButtons
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {onTotal() !== 0 ?
            (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={onTotal()}
              positiveFedback={onPercentage()}
            />) :
            (<Notification message='There is no feedback' ></Notification>)}
        </Section>
      </div>
    ); 


}

 


