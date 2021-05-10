import React, { useState } from 'react'
import Statistics from './Statistic'

const Statistics = (props) => {
    let good = props.good;
    let neutral = props.neutral;
    let bad = props.bad;
    
    let incrementGood = props.incrementGood;
    let incrementNeutral = props.incrementNeutral;
    let incrementBad = props.incrementBad;

    if (good + neutral + bad == 0) {
      return <div> No feedback given </div>;
    }
    return (
        <div>
            <Statistic text='good' value={good} />
            <Statistic text='neutral' value={neutral} />
            <Statistic text='bad' value={bad} />
            <Statistic text='average' value={(good * 1 + neutral * 0 + bad * -1) / 3} />
            <Statistic text='positive' value={(((neutral + bad) == 0) ? 0 : (good / (neutral + bad)))*100 + " %"} />
            <Statistic text='all' value = {good + neutral + bad} />
        </div>
    );
  };

export default AllStatistics