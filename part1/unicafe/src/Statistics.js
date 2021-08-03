import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = (props) => {
    let good = props.good;
    let neutral = props.neutral;
    let bad = props.bad;

    if (good + neutral + bad === 0) {
      return <div> No feedback given </div>;
    }
    return (
        <div>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='average' value={(good * 1 + neutral * 0 + bad * -1) / 3} />
            <StatisticLine text='positive' value={(((neutral + bad) === 0) ? 0 : (good / (neutral + bad)))*100 + " %"} />
            <StatisticLine text='all' value = {good + neutral + bad} />
        </div>
    );
  };

export default Statistics