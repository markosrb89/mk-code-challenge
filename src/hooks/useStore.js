import { useState, useEffect } from 'react';
import { createStore } from '../failux/store';
import { reducer } from '../failux/modules';

const initialValue = {
  intervalDelay: 1
};

const { getState, dispatch, subscribe } = createStore(reducer, initialValue);

export const useStore = () => {
  const [ storeState, setStoreState ] = useState(getState());

  useEffect(() => {
    subscribe(() => setStoreState(getState()))
  }, [storeState]);

  return [storeState, dispatch]
}