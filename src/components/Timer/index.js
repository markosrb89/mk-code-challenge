import React, { useState, useEffect, Fragment } from 'react';

import { Interval } from '../Interval';
import { useStore } from '../../hooks/useStore';

/*
 * Renders stopwatch and 'start'/'stop' buttons.
 */
export const Timer = () => {
  const [ state ] = useStore();
  const [ seconds, setSeconds ] = useState(0);
  const [ isActive, setIsActive ] = useState(false);

  useEffect(() => {
    let timerId = null;
    if (isActive && state.intervalDelay > 0) {
      timerId = setTimeout(() => {
        setSeconds(seconds => seconds + state.intervalDelay);
      }, state.intervalDelay * 1000);
    } else if (!isActive && seconds !== 0) {
      clearTimeout(timerId);
    }
    return () => clearTimeout(timerId);
  }, [isActive, seconds, state.intervalDelay]);

  const handleStart = () => (
    setIsActive(true)
  );

  const handleStop = () => {
    setSeconds(0);
    setIsActive(false);
  }

  return (
    <Fragment>
      <Interval />
      <div>Timer: {seconds} sec</div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </Fragment>
  );
};