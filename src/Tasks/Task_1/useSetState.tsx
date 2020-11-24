// stwórz hook useSetState, w którym
// odtworzysz możliwość zmiany state przez częściowe nadpisanie
// (identyczne działanie jak to co ma this.setState)

// const useSetState = (initialState) =>{

//   // return [state, setPartialState]
// }

import { useState, useEffect, useRef } from 'react';
import isObject from '../../Helpers/isObject';
// import isFunction from '../../Helpers/isFunction';

// type availableTypes = string | number | boolean;
// interface IState {
//   [key: string]: availableTypes | availableTypes[] | IState | IState[];
// }

interface IState {
  [key: string]: any;
}
type partialState = IState | callback;
type callback = (value: IState) => IState;
type stateUpdaterType = (
  newPartialState?: partialState,
  callback?: Function | undefined
) => void;

const useSetState = (initialState: IState) => {
  const [state, setState] = useState(initialState);
  const callbackRef = useRef(null) as React.MutableRefObject<any>;

  useEffect(() => {
    if (callbackRef.current instanceof Function) {
      callbackRef.current();
    }
    callbackRef.current = () => {};
  }, [state]);

  const stateUpdater: stateUpdaterType = (
    newPartialState: partialState = {},
    callback?: Function
  ) => {
    if (callback) callbackRef.current = callback;
    if (isObject(newPartialState)) {
      setState(state => ({ ...state, ...newPartialState }));
    } else if (newPartialState instanceof Function) {
      setState(state => ({ ...state, ...newPartialState(state) }));
    } else {
      throw new Error(
        'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
      );
    }
  };
  let returnValue: [IState, stateUpdaterType];
  returnValue = [state, stateUpdater];
  return returnValue;
};

export default useSetState;
