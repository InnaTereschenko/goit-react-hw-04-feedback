import { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackButtons from './FeedbackButtons/FeedbackButtons';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    
  this.setState(prevState => {
    let newState = {};

    if (evt === 'Good') {
      newState.good = prevState.good + 1;
    } else if (evt === 'Neutral') {
      newState.neutral = prevState.neutral + 1;
    } else if (evt === 'Bad') {
      newState.bad = prevState.bad + 1;
    }

    return newState;
  });
};
 
  onTotal = () => {
         return this.state.good + this.state.neutral + this.state.bad;
};

  onPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    }
    return (
      Math.round((this.state.good / this.onTotal()) * 100)
    );
}

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackButtons
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.onTotal() !== 0 ?
            (<Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.onTotal()}
              positiveFedback={this.onPercentage()}
            />) :
            (<Notification message='There is no feedback' ></Notification>)}
        </Section>
      </div>
    );
  }
}

