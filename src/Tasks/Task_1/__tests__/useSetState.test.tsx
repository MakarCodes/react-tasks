import { renderHook, act } from '@testing-library/react-hooks';
import useSetState from '../useSetState';

describe('useSetState hook works correctly if', () => {
  // it('throws an error when given payload is invalid', () => {
  //   const initialState = { name: 'Jarek', age: 28 };
  //   try {
  //     const {result} = renderHook(() => useSetState(initialState));
  //     // update of the state...
  //     const stateUpdater = result.current[1];
  //     stateUpdater('Jarek')
  //   } catch (err) {
  //     expect(err.message).toBe(
  //       'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
  //     );
  //   }
  // });
  it('stateUpdater function works correctly for given initial state', () => {
    const initialState = { name: 'Jarek', age: 28 };
    const { result } = renderHook(() => useSetState(initialState));
    expect(result.current[0]).toEqual(initialState);
    expect(result.current[1]).toBeInstanceOf(Function);
  });
  it('stateUpdater function works correctly for given partial state to update', () => {
    const initialState = { name: 'Jarek', age: 28 };
    const { result } = renderHook(() => useSetState(initialState));
    const stateUpdater = result.current[1];
    act(() => {
      stateUpdater({ name: 'Janek' });
      stateUpdater({ gender: 'male' });
    });
    expect(result.current[0]).toEqual({
      name: 'Janek',
      age: 28,
      gender: 'male',
    });
  });
  it('stateUpdater function works correctly when given payload has partial state and callback function', () => {
    const initialState = { name: 'Jarek', age: 28 };
    const { result } = renderHook(() => useSetState(initialState));
    const stateUpdater = result.current[1];
    act(() => {
      stateUpdater({ name: 'Janek' }, () => {
        stateUpdater({ gender: 'male' });
      });
    });
    expect(result.current[0]).toEqual({
      name: 'Janek',
      age: 28,
      gender: 'male',
    });
  });
});
