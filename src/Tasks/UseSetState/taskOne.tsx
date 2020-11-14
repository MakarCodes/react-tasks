import React from 'react';
import useSetState from './useSetState';

const TaskOne = () => {
  const [state, setState] = useSetState({ name: 'Jarek', age: 28 });

  const printName = () => {
    setState({ name: 'Janek' });
  };
  const printAge = () => {
    setState(state => ({ age: state.age - 3 }));
  };

  const printSentence = () => {
    setState({ name: 'Monika' }, () => {
      setState({ age: 28 });
    });
  };

  return (
    <div>
      <h2>About me!</h2>

      <p>My name: {state.name}</p>
      <button onClick={printName}>Show my real name!</button>

      <p>My age: {state.age}</p>
      <button onClick={printAge}>Show my real age!</button>

      <p>
        {state.name} always hide her name, so think she is {state.age}!
      </p>
      <button onClick={printSentence}>Sad true!</button>
    </div>
  );
};

export default TaskOne;
