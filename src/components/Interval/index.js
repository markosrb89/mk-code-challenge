import React from 'react';

import { useStore } from '../../hooks/useStore';
import { CHANGE_INTERVAL_DELAY } from '../../failux/actions';

/*
 * Shows interval delay and dispatch
 * an action to increase/decrease interval.
 */
export const Interval = () => {
  const [ state, dispatch ] = useStore();

  const changeIntervalDelay = value => (
    dispatch({
      type: CHANGE_INTERVAL_DELAY,
      payload: state.intervalDelay + value
    })
  );

  return(
    <div>
      <span>Update interval: {state.intervalDelay} sec</span>
      <span>
        <button onClick={() => changeIntervalDelay(-1)}>-</button>
        <button onClick={() => changeIntervalDelay(1)}>+</button>
      </span>
    </div>
  )
};